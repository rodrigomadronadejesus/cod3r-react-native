import React from 'react';
import { SafeAreaView, Text } from 'react-native';

import TaskList from './screens/TaskList';

export default () => {
    return (
        <SafeAreaView>
            <TaskList/>
        </SafeAreaView>
    );
}