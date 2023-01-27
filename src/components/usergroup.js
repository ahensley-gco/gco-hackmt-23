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
  } from "@aws-amplify/ui-react";

function UserGroup() {

const [groups, setGroups] = useState([]);
const [isAdmin, setAdmin] = useState(false);

async function fetchUsers() {
    const user =  await Auth.currentAuthenticatedUser();
    const groups = user.signInUserSession.accessToken.payload["cognito:groups"];
    setGroups(groups);
    if (groups == "admin") {
        setAdmin(true);
    }
}

    fetchUsers();
    return (
        <View>
            <Heading level={2}>{groups}</Heading>
        </View>
    );

}

export default UserGroup