import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';


import commonStyles from '../commonStyles';
import todayImage from '../../assets/imgs/today.jpg';
import Task from '../components/Task';

export default class TaskList extends Component {
    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');


        return (
            <View style={styles.Container}>
                <ImageBackground style={styles.Background} source={todayImage}>
                    <View style={styles.TitleBar}>
                        <Text style={styles.Title}>Hoje</Text>
                        <Text style={styles.Subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.TaskList}>
                    <Task desc="Comprar Livro" estimateAt={new Date()} doneAt={new Date()}/>
                    <Task desc="Ler Livro" estimateAt={new Date()}/>
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
    },
    Title: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.Secondary,
        fontSize: 50,
        marginLeft: 20,
        marginBottom: 20
    },
    Subtitle: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.Secondary,
        fontSize: 20,
        marginLeft: 20,
        marginBottom: 30
    }
});