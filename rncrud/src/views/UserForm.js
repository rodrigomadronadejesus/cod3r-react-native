import React, { useState } from 'react';
import { Text } from 'react-native';

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {});

    console.log(user.id);

    return (
        <Text>{user.id}</Text>
    );
}