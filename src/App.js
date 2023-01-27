// AUDRA HENSLEY 01/20/2023
//spee = sponsoree as managed by update user
//spee2 = sponsoree to be viewed by sponsor
//note = updates for the sponsor to see
import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from "aws-amplify";
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { listNotes, listSpees } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
  createSpee as createSpeeMutation,
  deleteSpee as deleteSpeeMutation,
  createUserSpeeXref as createUserSpeeXrefMutation,
} from "./graphql/mutations";
import userEvent from "@testing-library/user-event";
import UserGroup from "./components/usergroup";
import AdminMenu from "./components/adminmenu";

const App = ({ signOut, user }) => {
  const [notes, setNotes] = useState([]);
  const [spees, setSpees] = useState([]);
  const [displayCreateSponsForm, setDisplayCreateSponsForm] = useState(false);
  const [displayViewSpons, setDisplayViewSpons] = useState(false);



  useEffect(() => {
    fetchNotes();
    fetchSpees();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ query: listNotes });
    const notesFromAPI = apiData.data.listNotes.items;
    await Promise.all(
      notesFromAPI.map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );
    setNotes(notesFromAPI);
  }

  async function createNote(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      spee_id: form.get("spee_id"),
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
    };
    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createNoteMutation,
      variables: { input: data },
    });
    fetchNotes();
    event.target.reset();
  }

  async function deleteNote({ id, name }) {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
    await Storage.remove(name);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
    });
  }

  //SPONSOREE
  async function fetchSpees() {
    const apiData = await API.graphql({ query: listSpees });
    const speesFromAPI = apiData.data.listSpees.items.filter((spee) => spee.update_user == user.username);
    setSpees(speesFromAPI);
  }

  async function createSpee(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      name: form.get("spee_name"),
      bio: form.get("spee_bio"),
      age: form.get("spee_age"),
      update_user: user.username,
    };
    await API.graphql({
      query: createSpeeMutation,
      variables: { input: data },
    });
    fetchSpees();
    event.target.reset();
  }

  async function deleteSpee({ id }) {
    const newSpees = spees.filter((spee) => spee.id !== id);
    setSpees(newSpees);
    await API.graphql({
      query: deleteSpeeMutation,
      variables: { input: { id } },
    });
  }

    //createUserSpeeXrefMutation

  async function createUserSpeeXref(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const data = {
      sponsor_user: form.get("sponsor_user"),
      spee_id: form.get("spee_id"),
      created_by: user.username,
      sponsor_date: new Date().toISOString().slice(0, 10),
    };
    await API.graphql({
      query: createUserSpeeXrefMutation,
      variables: { input: data },
    });
    fetchSpees();
    event.target.reset();
  }

  //END ABH TESTING

  return (
    <View className="App">
      <Heading level={1}>Sponsors In The Loop </Heading>
      <Heading level={3}>Hi {user.username}</Heading>
      <UserGroup />
      <AdminMenu />
      
      

      <View as="form" margin="3rem 0" onSubmit={createSpee}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="spee_name"
            placeholder="Sponsoree Name"
            label="Sponsoree Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="spee_bio"
            placeholder="Sponsoree Bio"
            label="Sponsoree Bio"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="spee_age"
            placeholder="Sponsoree Age"
            label="Sponsoree Age"
            labelHidden
            variation="quiet"
            required
          />
          <Button type="submit" variation="primary">
            Create Sponsoree
          </Button>
        </Flex>
      </View>

      <Heading level={3}>Your Sponsorees</Heading>
      <View margin="3rem 0">
        {spees.map((spee) => (
          <Flex
            key={spee.id || spee.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {spee.name} age {spee.age}
            </Text>
            <Text as="span">{spee.bio}</Text>
            <Text fontStyle={'italic'}>managed by {spee.update_user}</Text>
          </Flex>
        ))}
      </View>

      <Heading level={3}>Sponsorees You Update</Heading>
      <View margin="3rem 0">
        {spees.map((spee) => (
          <Flex
            key={spee.id || spee.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
            wrap={"wrap"}
          >
            <Text as="strong" fontWeight={700}>
              {spee.name} age {spee.age}
            </Text>
            <Text as="span">{spee.bio}</Text>
            <Text fontStyle={'italic'}>managed by {spee.update_user}</Text>
            <Button variation="link" onClick={() => deleteSpee(spee)}>
              Delete Sponsoree
            </Button>
            <Button variation="link" onClick={() => setDisplayViewSpons(!displayViewSpons)}>
              View Sponsors
            </Button>
              {displayViewSpons ?
                (
                  <Text>View Sponsors er</Text>
                ) : null
              }
            <Button variation="link" onClick={() => setDisplayCreateSponsForm(!displayCreateSponsForm)}>
              Add Sponsor
            </Button>
              {displayCreateSponsForm ?
                (

                  <View as="form" margin="3rem 0" onSubmit={createUserSpeeXref}>
                            <Flex direction="row" justifyContent="center">
                            <TextField
                                name="spee_id"
                                defaultValue={spee.id}
                                label="Sponsoree ID"
                                labelHidden
                                variation="quiet"
                                required
                                type="hidden"
                              />
                              <TextField
                                name="sponsor_user"
                                placeholder="user.name"
                                label="Sponsor Username"
                                labelHidden
                                variation="quiet"
                                required
                              />
                              <Button type="submit" variation="primary">
                                Add
                              </Button>
                            </Flex>
                  </View>
                ) : null
              }
      
      <View as="form" margin="3rem 0" onSubmit={createNote}>
        <Flex direction="row" justifyContent="center">
        <TextField
            name="spee_id"
            defaultValue={spee.id}
            label="Sponsoree ID"
            labelHidden
            variation="quiet"
            required
            type="hidden"
          />
          <TextField
            name="name"
            placeholder="Update Name"
            label="Update Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Update Description"
            label="Update Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
            name="image"
            as="input"
            type="file"
            style={{ alignSelf: "end" }}
          />
          <Button type="submit" variation="primary">
            Create Update
          </Button>
        </Flex>
      </View>

          </Flex>
        ))}
      </View>

      <Heading level={2}>Current Updates</Heading>
      <View margin="3rem 0">
        {notes.map((note) => (
          <Flex
            key={note.id || note.name}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Text as="strong" fontWeight={700}>
              {note.name}
            </Text>
            <Text as="span">{note.description}</Text>
            {note.image && (
              <Image
                src={note.image}
                alt={`visual aid for ${note.name}`}
                style={{ width: 400 }}
              />
            )}
            <Button variation="link" onClick={() => deleteNote(note)}>
              Delete update
            </Button>
          </Flex>
        ))}
      </View>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);