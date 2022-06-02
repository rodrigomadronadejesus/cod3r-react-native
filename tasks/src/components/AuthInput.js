import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default props => {
    return (
        <View style={[styles.Container, props.style]}>
            <Icon name={props.icon} size={20} style={styles.Icon}/>
            <TextInput {...props} style={styles.Input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        width: '100%',
        height: 40,
        backgroundColor: '#EEE',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    Icon: {
        color: '#333',
        marginLeft: 20
    },
    Input: {
        marginLeft: 20,
        width: '70%'
    }
});