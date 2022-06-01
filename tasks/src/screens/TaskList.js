import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome'

import commonStyles from '../commonStyles';
import todayImage from '../../assets/imgs/today.jpg';
import Task from '../components/Task';

export default class TaskList extends Component {

    state = {
        showDoneTasks: true,
        tasks: [
            {
                id: Math.random(),
                desc: 'Comprar Livro de React Native',
                estimateAt: new Date(),
                doneAt: new Date()
            },
            {
                id: Math.random(),
                desc: 'Comprar Livro de React Native',
                estimateAt: new Date(),
                doneAt: null
            },
        ]
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks];

        tasks.forEach(task => {
            if(task.id === taskId){
                task.doneAt = task.doneAt ? null : new Date();
            }

            this.setState({ tasks: tasks });
        });
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks });
    }


    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');


        return (
            <View style={styles.Container}>
                <ImageBackground style={styles.Background} source={todayImage}>
                    <View style={styles.IconBar}>
                        <TouchableOpacity onPress={this.toggleFilter}>
                            <Icon 
                                name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                size={35}
                                color={commonStyles.Colors.Secondary}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.TitleBar}>
                        <Text style={styles.Title}>Hoje</Text>
                        <Text style={styles.Subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.TaskList}>
                    <FlatList
                        data={this.state.tasks}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask}/>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Background: {
        flex: 3
    },
    TaskList: {
        flex: 7
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
    },
    IconBar: {
        flexDirection: 'row',
        marginHorizontal: 20,
        justifyContent: 'flex-end',
        marginTop: Platform.OS === 'ios' ? 40 : 10
    }
});