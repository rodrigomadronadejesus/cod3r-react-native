import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonStyles from "../commonStyles";

export default props => {
    return (
        <View style={styles.Container}>
            <View style={styles.CheckContainer}>
                {getCheckView(props.doneAt)}
            </View>
            <View>
                <Text>{props.desc}</Text>
                <Text>{props.estimateAt + ""}</Text>
            </View>
        </View>
    );
}

function getCheckView (doneAt) {
    if (doneAt != null) {
        return (
            <View style={styles.Done}>
                <Icon name='check' size={20} color='#FFF'/>
            </View>
        );
    }
    else {
        return (
            <View style={styles.Pending}/>
        );
    }
}

const styles = StyleSheet.create ({
    Container: {
        flexDirection: 'row',
        borderColor: '#AAA',
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10
    },
    CheckContainer: {
        width: '20%',
        alignItems: 'center'
    },
    Pending: {
        height: 25,
        width: 25,
        borderRadius: 13,
        borderWidth: 1,
        borderColor: '#555'
    },
    Done: {
        height: 25,
        width: 25,
        borderRadius: 13,
        backgroundColor: '#4D7031',
        alignItems: 'center',
        justifyContent: 'center'
    }
});