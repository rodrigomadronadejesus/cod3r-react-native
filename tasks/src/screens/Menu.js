import React from 'react';
import { ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { CommonActions } from '@react-navigation/native';

export default props => {
    return (
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    );
}