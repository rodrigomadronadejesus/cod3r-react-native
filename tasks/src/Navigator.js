import React from "react";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Auth from "./screens/Auth";
import Home from './screens/TaskList';

const MainRoutes = {
    Auth: {
        name: 'Auth',
        screen: Auth
    },
    Home: {
        name: 'Home',
        screen: Home
    }
}

const MainNavigator = createSwitchNavigator(MainRoutes, {
    initialRouteName: 'Auth'
});

export default createAppContainer(MainNavigator);