import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Platform } from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import Icon from 'react-native-vector-icons/FontAwesome'

import commonStyles from '../commonStyles';
import todayImage from '../../assets/imgs/today.jpg';
import Task from '../components/Task';
import AddTask from './AddTask';
import { set } from 'react-native-reanimated';

export default class TaskList extends Component {

    state = {
        showDoneTasks: true,
        showAddTask: true,
        visibleTasks: [],
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

    componentDidMount = () => {
        this.filterTasks();
    }

    toggleTask = taskId => {
        const tasks = [...this.state.tasks];

        tasks.forEach(task => {
            if(task.id === taskId){
                task.doneAt = task.doneAt ? null : new Date();
            }

            this.setState({ tasks: tasks });
        });

        this.filterTasks();
    }

    toggleFilter = () => {
        this.setState({ showDoneTasks: !this.state.showDoneTasks }, this.filterTasks);
    }

    filterTasks = () => {
        let visibleTasks = null;
        if(this.state.showDoneTasks){
            visibleTasks = [...this.state.tasks];
        }
        else {
            visibleTasks = this.state.tasks.filter(task => task.doneAt === null);
        }

        this.setState({ visibleTasks });
    }

    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

        return (
            <View style={styles.Container}>
                <AddTask 
                    isVisible={this.state.showAddTask}
                    onCancel={() => this.setState({showAddTask: false})}
                />
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
                        data={this.state.visibleTasks}
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