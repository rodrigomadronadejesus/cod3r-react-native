import React from 'react';
import { Alert, Platform } from 'react-native';

const server = Platform.OS === 'ios' ? 'http://127.0.0.1:3000' : 'http://192.168.254.146:3000';

function showError (err){
    Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`)
}

function showSuccess(msg){
    Alert.alert('Sucesso!', msg);
}

export { server, showError, showSuccess};