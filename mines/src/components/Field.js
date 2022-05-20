import { parseAsync } from "@babel/core";
import React from "react";
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import params from '../Params';

import Mine from './Mine';
import Flag from "./Flag";

export default props => {

    const { mined, opened, nearMines, exploded, flagged } = props;

    const styleField = [styles.Field];
    if (opened) styleField.push(styles.Opened);
    if(exploded) styleField.push(styles.Exploded);
    if (flagged) styleField.push(styles.Flagged)
    if (!opened && !exploded) styleField.push(styles.Regular);

    let color = null;
    if(nearMines){
        if(nearMines == 1) color = '#2A28D7';
        if(nearMines == 2) color = '#2B520F';
        if(nearMines > 2 && nearMines < 6) color = '#F9060A';
        if(nearMines >= 6) color = '#F221A9';
    }

    return (
        <TouchableWithoutFeedback 
            onPress={props.onOpen}
            onLongPress={props.onSelect}
        >
            <View style={styleField}>
                {!mined && opened > 0 && nearMines ? <Text style={[styles.Label, { color: color }]}>{nearMines}</Text>: false}
                {mined && opened ? <Mine/>: false}
                {flagged && !opened ? <Flag/>: false}
            </View>
        </TouchableWithoutFeedback>
    );
}


const styles = StyleSheet.create ({
    Field: {
        height: params.blockSize,
        width: params.blockSize,
        borderWidth: params.borderSize
    },
    Regular: {
        backgroundColor: '#999',
        borderLeftColor: '#CCC',
        borderTopColor: '#CCC',
        borderRightColor: '#333',
        borderBottomColor: '#333'
    },
    Opened:{
        backgroundColor: '#999',
        borderColor: '#777',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Label: {
        fontWeight: 'bold',
        fontSize: params.fontSize
    },
    Exploded: {
        backgroundColor: 'red',
        borderColor: 'red'
    },
    Flagged:{

    }
});