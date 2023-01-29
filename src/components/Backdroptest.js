import { API, Storage } from "aws-amplify";
import '../css/form.css';
import React, { useState, useEffect } from "react";
import {
    createNote as createNoteMutation,
    deleteNote as deleteNoteMutation,
    createSpee as createSpeeMutation,
    deleteSpee as deleteSpeeMutation,
    createUserSpeeXref as createUserSpeeXrefMutation,
  } from "../graphql/mutations";
  import { listSpees } from "../graphql/queries";
  import { Amplify } from "aws-amplify";
import { useNavigate } from "react-router";
function Backdroptest(props) {
  const [spees, setSpees] = useState([]); 
  const navigate = useNavigate(); 

  async function createSpee(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = { 
          name: form.get("spee_name"),
          bio: form.get("spee_bio"),
          age: form.get("spee_age"), 
          update_user: 'aaa',
          charityID: 'bbb',
        };
        console.log("Data For API CALL:", data);
        await API.graphql({
          query: createSpeeMutation,
          variables: { input: data }
        });
        console.log("Mutation Complete now Fetch Results to confirm");
        fetchSpees();
        event.target.reset();
        navigate(-1);
      }

      async function fetchSpees() {
        const apiData = await API.graphql({ query: listSpees });
        const speesFromAPI = apiData.data.listSpees.items.filter((spee) => spee.update_user === 'aaa');
        console.log("Spees Fetch:", speesFromAPI);
      }
      
    return (
        <div className="backdroptest" >
          <a class = "back" href="javascript: history.go(-1)">Go Back</a>
            <h3>Create Sponsoree</h3>
            
                <form as="form"  onSubmit={createSpee}>
                <div className="container">
                    <label>
                        <div className="formInput">Name:</div>
                        <input type="text" name="spee_name" />
                    </label>
                    <label>
                        <div className="formInput">Age:</div>
                        <input type="text" name="spee_age" />
                    </label>
                    
                    <label>
                    <div className="formInput"> Story</div>
                        
                        <textarea placeholder="Add story here" name="spee_bio"></textarea>
                       
                    </label>
                    <input type="submit" value="Submit" className='submit' />

                </div>
                </form>
            

        </div>
    )
}
export default Backdroptest;