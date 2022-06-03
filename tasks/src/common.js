import React from 'react';
import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'ios' ? 'http://127.0.0.1:3000' : 'http://192.168.254.146:3000';

function showError (err){
    if(err.response && err.response.data){
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err.response.data}`);
    }
    else {
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`);
    }
}

function showSuccess(msg){
    if(msg.response && msg.response.data){
        Alert.alert('Sucesso!', msg.response.data);
    }
    else {
        Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${msg}`);
    }
}

export { server, showError, showSuccess};