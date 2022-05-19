import React from "react";

import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const styles = StyleSheet.create ({
    Button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    OperationButton: {
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    ButtonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    ButtonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
});

export default props => {

    const styleButton = [styles.Button];

    if (props.double) styleButton.push(styles.ButtonDouble);
    if (props.triple) styleButton.push(styles.ButtonTriple);
    if (props.operation) styleButton.push(styles.OperationButton);

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    );
}

