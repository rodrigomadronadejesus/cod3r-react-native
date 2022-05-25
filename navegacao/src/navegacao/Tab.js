import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from "../views/TelaC";

const Tab = createBottomTabNavigator();

export default props => {
    return (
        <Tab.Navigator
            initialRouteName="TelaB"
        >
            <Tab.Screen 
                name="TelaA" 
                options={{
                    title: 'Tela A',
                    tabBarLabel: 'Tela A',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='ios-information-outline' size={30} color='#4F8EF7'/>
                    ),
                }}
                component={TelaA}
            />
            <Tab.Screen 
                name="TelaB" 
                options={{
                    title: 'Tela B',
                    tabBarLabel: 'Tela B',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='ios-information' size={30} color='#4F8EF7'/>
                    ),
                }}
                component={TelaB}
            />
            <Tab.Screen 
                name="TelaC" 
                options={{
                    title: 'Tela C',
                    tabBarLabel: 'Tela C',
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='ios-list' size={30} color='#4F8EF7'/>
                    ),
                }}
                component={TelaC}
            />
        </Tab.Navigator>
    );
}
