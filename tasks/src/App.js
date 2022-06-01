import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import TaskList from './screens/TaskList';

export default () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <TaskList/>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}