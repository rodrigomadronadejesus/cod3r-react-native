import React, { Component } from 'react';
import { 
    Modal, 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';

import commonStyles from '../commonStyles';

const initialState = {
    desc: ''
};

export default class AddTask extends Component {

    state = {
        ...initialState
    }

    render () {
        return (
            <Modal 
                transparent={true}
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType='slide'
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.Background}></View>
                </TouchableWithoutFeedback>
                <View style={styles.Container}>
                    <Text style={styles.Header}>Nova Tarefa</Text>
                    <TextInput 
                        style={styles.Input} 
                        placeholder="Informe a descrição..."
                        onChangeText={ desc => this.setState({desc}) }
                        value={this.state.desc}
                    />
                    <View style={styles.Buttons}>
                        <TouchableOpacity onPress={this.props.onCancel}>
                            <Text style={styles.Button}>Cancelar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.Button}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.Background}></View>
                </TouchableWithoutFeedback>
            </Modal>
        );
    }
}

const styles = StyleSheet.create ({
    Background: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    Container: {
        backgroundColor: '#FFF'
    },
    Header: {
        fontFamily: commonStyles.FontFamily,
        backgroundColor: commonStyles.Colors.Today,
        color: commonStyles.Colors.Secondary,
        textAlign: 'center',
        padding: 15,
        fontSize: 15,
        fontWeight: 'bold'
    },
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    Button: {
        margin: 20,
        marginRight: 30,
        color: commonStyles.Colors.Today
    },
    Input: {
        fontFamily: commonStyles.FontFamily,
        height: 40,
        margin: 15,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#E3E3E3',
        borderRadius: 6
    }
});