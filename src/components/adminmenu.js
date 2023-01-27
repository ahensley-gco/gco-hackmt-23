import Amplify, { Auth, API } from 'aws-amplify';
import React, { Component, useState } from 'react';
import {
    Button,
    Flex,
    Heading,
    Image,
    Text,
    TextField,
    View,
    withAuthenticator,
    Menu,
    MenuItem,
    MenuButton,
    Expander,
    ExpanderItem,
  } from "@aws-amplify/ui-react";

function AdminMenu() {

const [groups, setGroups] = useState([]);
const [isAdmin, setAdmin] = useState(false);
const [displaySpees, setDisplaySpees] = useState(false);

async function fetchUsers() {
    const user =  await Auth.currentAuthenticatedUser();
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    setGroups(groups);
    if (groups == "admin") {
        //setAdmin(true);
        setAdmin((isAdmin) => ({ ...isAdmin, isAdmin: { prop: true } }   ) );
    }
}

    fetchUsers();
    return (
        <Flex padding="1rem">
            {isAdmin ?
                (
                <View>
                    <Expander>
                        <ExpanderItem title="View Sponsorees you manage" value="expander-1">
                            first 
                        </ExpanderItem>
                        <ExpanderItem title="Add a Sponsoree" value="expander-2">
                            FORM GOES HERE
                        </ExpanderItem>
                    </Expander>


                     <Menu 
                        trigger={
                            <MenuButton variation="primary" size="large" width="150%">
                                Admin Menu
                            </MenuButton>
                        }
                     >
                        <MenuItem>View Sponsorees</MenuItem>
                        <MenuItem>Add Sponsorees</MenuItem>
                    </Menu>
                    

                </View>

                ) : null
              }

        </Flex>
    );

}

export default AdminMenu