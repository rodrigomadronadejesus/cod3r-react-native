import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default props => {
    return (
        <View style={styles.Container}>
            <Text>{props.desc}</Text>
            <Text>{props.estimateAt + ""}</Text>
            <Text>{props.doneAt + ""}</Text>
        </View>
    );
}

const styles = StyleSheet.create ({
    Container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    }
});