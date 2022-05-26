import React, { Fragment, useContext } from 'react';
import { View, FlatList, Alert } from 'react-native';
import { Avatar, ListItem, Icon, Button } from 'react-native-elements';
import UsersContext from '../context/UsersContext'

export default props => {
    const { state } = useContext(UsersContext);

    function confirmUserDeletion(user) {
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário? ',[
            {
                text: 'Sim',
                onPress(){
                    console.warn('delete ' + user.id);
                }
            },
            {
                text: 'Não'
            }
        ]);
    }

    function getActions (user){
        return (
            <View style={{
                alignSelf: 'flex-end',
                flexDirection: 'row'
            }}>
                <Button
                    onPress={ () => props.navigation.navigate("UserForm", user) }
                    type='clear'
                    icon={<Icon name="edit" size={25} color="orange"/>}
                />
                <Button
                    onPress={ () => confirmUserDeletion(user) }
                    type='clear'
                    icon={<Icon name="delete" size={25} color="red"/>}
                />
            </View>
        )
    }

    function getUserItem ({ item: info }){
        return (
            <ListItem key={info.id} bottomDivider onPress={() => props.navigation.navigate('UserForm')}>
                <Avatar source={{uri: info.avatarUrl}}/>
                <ListItem.Content>
                    <ListItem.Title>{info.name}</ListItem.Title>
                    <ListItem.Subtitle>{info.email}</ListItem.Subtitle>
                    {getActions(info)}
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <View>
            <FlatList
                data={state.users}
                keyExtractor={user => user.id.toString()}
                renderItem={getUserItem}
            />
        </View>
    );
}