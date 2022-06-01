import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

import todayImage from '../../assets/imgs/today.jpg';

import moment from 'moment';
import 'moment/locale/pt-br';

export default class TaskList extends Component {
    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');


        return (
            <View style={styles.Container}>
                <ImageBackground style={styles.Background} source={todayImage}>
                    <View style={styles.TitleBar}>
                        <Text>Hoje</Text>
                        <Text>{today}</Text>
                    </View>
                </ImageBackground>
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
    },
    TitleBar: {
        flex: 1,
        justifyContent: 'flex-end'
    }
});