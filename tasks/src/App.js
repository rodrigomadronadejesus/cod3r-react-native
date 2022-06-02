import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import Auth from './screens/Auth';

export default () => {
    return (
        <GestureHandlerRootView style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <Auth/>
            </SafeAreaView>
        </GestureHandlerRootView>
    );
}