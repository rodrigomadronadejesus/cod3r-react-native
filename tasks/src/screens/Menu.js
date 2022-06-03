import React from 'react';
import { StyleSheet, View, Platform, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Gravatar } from 'react-native-gravatar';

export default props => {
    return (
        <DrawerContentScrollView>
            <View style={styles.Header}>
                <Gravatar 
                    style={styles.Avatar}
                    options={{
                        email: props.email,
                        secure: true
                    }}
                />
                <View style={styles.UserInfo}>
                    <Text>{props.name}</Text>
                    <Text>{props.email}</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create ({
    Header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    Avatar: {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 30,
        margin: Platform.OS === 'ios' ? 30 : 10
    },
    UserInfo: {
        
    }
});