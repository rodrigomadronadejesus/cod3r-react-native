import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={styles.Container}>
            <View style={[styles.Flagpole, props.bigger ? styles.FlagpoleBigger : null]}/>
            <View style={[styles.Flag, props.bigger ? styles.FlagBigger: null]}/>
            <View style={[styles.Base1, props.bigger ? styles.FlagBigger: null]}/>
            <View style={[styles.Base2, props.bigger ? styles.Base2Bigger: null]}/>
        </View>
    );
}


const styles = StyleSheet.create ({
    Container: {
        marginTop: 2
    },
    Flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 9
    },
    Flag: {
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    Base1: {
        position: 'absolute',
        height: 2,
        width: 6,
        backgroundColor: '#222',
        marginLeft: 2,
        marginTop: 10,
    },
    Base2: {
        position: 'absolute',
        height: 2,
        width: 10,
        backgroundColor: '#222',
        marginLeft: 5,
        marginTop: 12
    },
    FlagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16
    },
    FlagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3
    },
    Base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 20,
        marginLeft: 12
    },
    Base2Bigger: {
        height: 4,
        width: 20,
        marginTop: 24,
        marginLeft: 8
    }
});