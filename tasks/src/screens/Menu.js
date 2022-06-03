import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Gravatar } from 'react-native-gravatar';
import commonStyles from '../commonStyles';

export default props => {
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
    }
});