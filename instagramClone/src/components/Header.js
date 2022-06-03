import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform,
    Image
} from 'react-native';

import Icon from '../assets/imgs/icon.png';

export default class Header extends Component {
    render () {
        return (
            <View style={styles.Container}>
                <View style={styles.RowContainer}>
                    <Image source={Icon} style={styles.Image}/>
                    <Text style={styles.Title}>Lambe Lambe</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        marginTop: Platform.OS === 'ios' ? 20: 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    RowContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    Image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    Title: {
        color: '#000',
        fontFamily: 'shelter',
        height: 30,
        fontSize: 20
    }
});