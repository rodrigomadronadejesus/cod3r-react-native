import React from 'react';
import { StyleSheet, View, Platform, Text, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { CommonActions } from '@react-navigation/native';
import { Gravatar } from 'react-native-gravatar';
import commonStyles from '../commonStyles';

import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';


export default props => {

    const logout = () => {
        delete axios.defaults.headers.common['Authorization']
        AsyncStorage.removeItem('userData')
        props.navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    {
                        name: 'Auth',
                    },
                ],
            })
        )
    }

    return (
        <DrawerContentScrollView>
            <View style={styles.Header}>
                <Text style={styles.Title}>Tasks</Text>
                <Gravatar 
                    style={styles.Avatar}
                    options={{
                        email: props.email,
                        secure: true
                    }}
                />
                <View style={styles.UserInfo}>
                    <Text style={styles.Name}>{props.name}</Text>
                    <Text style={styles.Email}>{props.email}</Text>
                </View>
                <TouchableOpacity onPress={logout}>
                    <View style={styles.LogoutIcon}> 
                        <Icon name='sign-out' size={30} color='#800'/>
                    </View>
                </TouchableOpacity>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create ({
    Header: {
        borderBottomWidth: 1,
        borderColor: '#DDD',
        alignItems: 'center'
    },
    Avatar: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 30,
        backgroundColor: '#222',
        margin: Platform.OS === 'ios' ? 30 : 10
    },
    Title: {
        color: '#000',
        fontFamily: commonStyles.FontFamily,
        fontSize: 30,
        paddingTop: Platform.OS === 'ios' ? 50 : 30,
        padding: 10
    },
    UserInfo: {
        marginLeft: 10,
    },
    Name: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.MainText,
        fontSize: 20,
        marginBottom: 5
    },
    Email: {
        fontFamily: commonStyles.FontFamily,
        fontSize: 15,
        marginBottom: 5
    },
    LogoutIcon: {
        marginLeft: 10,
        marginBottom: 10
    }
});