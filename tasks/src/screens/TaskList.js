import React, { Component } from 'react';
import { 
    View,
    Text,
    ImageBackground,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Platform,
    Alert 
} from 'react-native';
import moment from 'moment';
import 'moment/locale/pt-br';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome'

import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import axios from 'axios';

import commonStyles from '../commonStyles';

import todayImage from '../../assets/imgs/today.jpg';
import tomorrowImage from '../../assets/imgs/tomorrow.jpg';
import weekImage from '../../assets/imgs/week.jpg';
import monthImage from '../../assets/imgs/month.jpg';

import Task from '../components/Task';
import AddTask from './AddTask';

import { server, sever, showError, showSuccess } from '../common';


const initialState = {
    showDoneTasks: true,
    showAddTask: false,
    visibleTasks: [],
    tasks: []
};

export default class TaskList extends Component {

    state = {
        ...initialState
    }

    componentDidMount = async () => {
        const stateString = await AsyncStorage.getItem('tasksState');
        const savedState = JSON.parse(stateString) || initialState;
        this.setState({
            showDoneTasks: savedState.showDoneTasks
        }, this.filterTasks);

        this.loadTasks();
    }

    loadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead})
                .format('YYYY-MM-DD 23:59:59');
            const res = await axios.get(`${server}/tasks?date=${maxDate}`);
            this.setState({ tasks: res.data }, this.filterTasks);
        } catch(e) {
            showError(e);
        }
    }

    toggleTask = async taskId => {
        try{
            await axios.put(`${server}/tasksToggle/${taskId}`);
            this.loadTasks();
        }
        catch(e){
            showError(e);
        }
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
        AsyncStorage.setItem('tasksState', 
            JSON.stringify({
                showDoneTasks: this.state.showDoneTasks
            })
        );
    }

    addTask = async newTask => {
        if(!newTask.desc || !newTask.desc.trim()) {
            Alert.alert('Dados Inválidos', 'Descrição não informada!')
            return 
        }

        try {
            await axios.post(`${server}/tasks`, {
               desc: newTask.desc,
               estimateAt: newTask.date 
            })

            this.setState({ showAddTask: false }, this.loadTasks)
        } catch(e) {
            showError(e)
        }
    }

    deleteTask = async taskId => {
        try{
            await axios.delete(`${server}/tasks/${taskId}`);
            this.loadTasks();
        }
        catch (e){
            showError(e);
        }
    }

    getImage = () => {
        switch(this.props.daysAhead){
            case 0:
                return todayImage;
            case 1:
                return tomorrowImage;
            case 7:
                return weekImage;
            case 30:
                return monthImage;
            default:
                return todayImage;
        }
    }

    getColor = () => {
        switch(this.props.daysAhead){
            case 0:
                return commonStyles.Colors.Today;
            case 1:
                return commonStyles.Colors.Tomorrow;
            case 7:
                return commonStyles.Colors.Week;
            case 30:
                return commonStyles.Colors.Month;
            default:
                return commonStyles.Colors.Today;
        }
    }

    render (){
        const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

        return (
            <GestureHandlerRootView style={{ flex: 1 }}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.Container}>
                        <AddTask 
                            isVisible={this.state.showAddTask}
                            onCancel={() => this.setState({showAddTask: false})}
                            onSave={this.addTask}
                        />
                        <ImageBackground style={styles.Background} source={this.getImage()}>
                            <View style={styles.IconBar}>
                                <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                                    <Icon name='bars' size={35} color={commonStyles.Colors.Secondary}/>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={this.toggleFilter}>
                                    <Icon 
                                        name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                                        size={35}
                                        color={commonStyles.Colors.Secondary}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.TitleBar}>
                                <Text style={styles.Title}>{this.props.title}</Text>
                                <Text style={styles.Subtitle}>{today}</Text>
                            </View>
                        </ImageBackground>
                        <View style={styles.TaskList}>
                            <FlatList
                                data={this.state.visibleTasks}
                                keyExtractor={item => `${item.id}`}
                                renderItem={({item}) => <Task {...item} toggleTask={this.toggleTask} onDelete={this.deleteTask}/>}
                            />
                        </View>
                        <TouchableOpacity style={[styles.AddButton, { backgroundColor: this.getColor()}]} onPress={() => this.setState({showAddTask: true})} activeOpacity={0.7}>
                            <Icon name="plus" size={20} color={commonStyles.Colors.Secondary}/>
                        </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </GestureHandlerRootView>
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
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? 40 : 10
    },
    AddButton: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: commonStyles.Colors.Today,
        justifyContent: 'center',
        alignItems: 'center'
    }
});