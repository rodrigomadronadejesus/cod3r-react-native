import React from 'react';
import { View, FlatList } from 'react-native';
import users from '../data/users';
import { Avatar, ListItem } from 'react-native-elements';

export default props => {

    function getUserItem ({ item: info }){
        return (
            <ListItem key={info.id} bottomDivider onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{uri: info.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{info.name}</ListItem.Title>
                    <ListItem.Subtitle>{info.email}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                data={users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    );
}