import React, { Component } from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';

import Login from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

export default class Auth extends Component {
    render (){
        return (
            <ImageBackground 
                source={Login}
                style={styles.Background}
            >
                <Text style={styles.Title}>Tasks</Text>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create ({
    Background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.Secondary,
        fontSize: 70,
        marginBottom: 10
    }
});