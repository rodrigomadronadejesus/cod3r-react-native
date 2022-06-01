import React from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from "moment";
import 'moment/locale/pt-br';


import Swipeable from 'react-native-gesture-handler/Swipeable';
import commonStyles from "../commonStyles";

export default props => {

    const doneOrNotStyle = props.doneAt != null ? { textDecorationLine: 'line-through' } : {};
    const date = props.dateAt ? props.doneAt : props.estimateAt;
    const formattedDateAt = moment(date).locale('pt-br').format('ddd, D [de] MMMM');


    const getRightContent = () => {
        return (
            <TouchableOpacity style={styles.Right}>
                <Icon name='trash' size={30} color='#FFF'/>
            </TouchableOpacity>
        );
    }

    const getLeftContent = () => {
        return (
            <TouchableOpacity style={styles.Left}>
                <Icon name='trash' size={20} color='#FFF' style={styles.ExcludeIcon}/>
                <Text style={styles.ExcludeText}>Excluir</Text>
            </TouchableOpacity>
        );
    }
 
    return (
        <Swipeable renderRightActions={getRightContent} renderLeftActions={getLeftContent}>
            <View style={styles.Container}>
                <TouchableWithoutFeedback onPress={() => props.toggleTask(props.id)}>
                    <View style={styles.CheckContainer}>
                        {getCheckView(props.doneAt)}
                    </View>
                </TouchableWithoutFeedback>
                <View>
                    <Text style={[styles.Desc, doneOrNotStyle]}>{props.desc}</Text>
                    <Text style={styles.Date}>{formattedDateAt}</Text>
                </View>
            </View>
        </Swipeable>
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
        paddingVertical: 10,
        backgroundColor: '#FFF'
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
    },
    Desc: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.MainText,
        fontSize: 15
    },
    Date: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.SubText,
        fontSize: 12
    },
    Right: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    },
    Left: {
        backgroundColor: 'red',
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1
    },
    ExcludeText: {
        fontFamily: commonStyles.FontFamily,
        color: '#FFF',
        fontSize: 20,
        margin: 10
    },
    ExcludeIcon: {
        marginLeft: 10
    }
});