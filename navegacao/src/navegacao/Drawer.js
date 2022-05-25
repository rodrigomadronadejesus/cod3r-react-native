import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import TelaA from '../views/TelaA';
import TelaB from '../views/TelaB';
import TelaC from '../views/TelaC';
import TelaD from '../views/TelaD';

const Drawer = createDrawerNavigator();

export default props => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name='TelaA' 
                component={TelaA}
                options={{
                    title: 'Tela A'
                }}
            />
            <Drawer.Screen 
                name='TelaB' 
                component={TelaB}
                options={{
                    title: 'Tela B'
                }}
            />
            <Drawer.Screen 
                name='TelaC' 
                component={TelaC}
                options={{
                    title: 'Tela C'
                }}
            />
            <Drawer.Screen 
                name='TelaD'
                component={TelaD}
                options={{
                    title: 'Tela D'
                }}
            />
        </Drawer.Navigator>
    );
}