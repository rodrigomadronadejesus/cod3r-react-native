import React from "react";
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


// import Drawer from "./Drawer";
// import Stack from "./Stack";
import Tab from './Tab';

export default props => {
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <NavigationContainer>
                <Tab/>
            </NavigationContainer>
        </SafeAreaView>
    );
}