import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import todayImage from '../../assets/imgs/today.jpg';

export default class TaskList extends Component {
    render (){
        return (
            <View style={styles.Container}>
                <ImageBackground style={styles.Background} source={todayImage}/>
                <View style={styles.TaskList}>
                    <Text>TaskList</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flexGrow: 1
    },
    Background: {
        flexGrow: 3
    },
    TaskList: {
        flexGrow: 7
    }
});