import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

export default props => {
    return (
        <View style={styles.Container}>
            <Gravatar 
                options={{ email: props.email, secure: true }}
                style={styles.Avatar}
            />
            <Text style={styles.NickName}>{props.nickname}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    Container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    NickName: {
        color: '#444',
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold'
    },
    Avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    }
});