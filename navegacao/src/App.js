import React from "react";
import { SafeAreaView, Text } from "react-native";
import TextoCentral from './components/TextoCentral';

export default props => {
    
    return (
        <SafeAreaView style={{
            flex: 1
        }}>
            <TextoCentral>
                App
            </TextoCentral>
        </SafeAreaView>
    );
}