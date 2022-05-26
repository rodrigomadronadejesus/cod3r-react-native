import React, { useState, Fragment } from 'react';
import { Text, View, TextInput, StyleSheet, Button } from 'react-native';

export default ({route, navigation}) => {

    const [user, setUser] = useState(route.params ? route.params : {});

    console.log(user);

    return (
        <View style={styles.Form}>
            <Text>Nome</Text>
            <TextInput
                style={styles.Input}
                onChangeText={name => {
                    setUser({...user, name});
                }}
                value={user.name}
                placeholder="Informe o Nome"
            />
            <Text>E-MAIL</Text>
            <TextInput
                style={styles.Input}
                onChangeText={email => {
                    setUser({...user, email});
                }}
                value={user.email}
                placeholder="Informe o email"
            />
                        <Text>E-MAIL</Text>
            <TextInput
                style={styles.Input}
                onChangeText={avatarUrl => {
                    setUser({...user, avatarUrl});
                }}
                value={user.avatarUrl}
                placeholder="Informe a URL do avatar"
            />
            <View style={styles.Button}>
                <Button
                    title="Salvar"
                    onPress={() => {
                        navigation.goBack()
                    }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Button:{
        justifyContent: 'flex-end',
        flex: 1
    },
    Form:{
        padding: 12,
        flex: 1
    },
    Input: {
        height: 100,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        padding: 3,
        fontSize: 30
    }
});