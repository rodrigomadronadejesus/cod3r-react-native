import React, { Component } from 'react';
import { 
    ImageBackground, 
    Text, 
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Platform,
    Alert
} from 'react-native';

import axios from 'axios';

import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import AuthInput from '../components/AuthInput';

import Login from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

import { showError, showSuccess, server } from '../common';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    stateNew: false
};

export default class Auth extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        stateNew: false
    }

    signinOrSignup = () => {
        if(this.state.stateNew){
            this.signup();
        }
        else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    signup = async () => {
        try{
            await axios.post(`${server}/signup`, {
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword,
            });
            
            showSuccess('Usuário cadastrado');
            this.setState({ ...initialState })
        }  
        catch(e){
            showError(e);
        }
    }

    render (){
        return (
            <GestureHandlerRootView style={{flex: 1}}>
                <SafeAreaView style={{flex: 1}}>
                    <ImageBackground 
                        source={Login}
                        style={styles.Background}
                    >
                        <Text style={styles.Title}>Tasks</Text>
                        <View style={styles.FormContainer}>
                            <Text style={styles.Subtitle}>
                                {this.state.stateNew ? 'Crie a sua conta' : 'Informe seus dados'}
                            </Text>
                            {this.state.stateNew && 
                                (
                                    <AuthInput 
                                        icon='user'
                                        placeholder='Nome'
                                        style={styles.Input}
                                        value={this.state.name}
                                        onChangeText={(name) => this.setState({name})}

                                    />
                                )

                            }
                            <AuthInput
                                icon='at'
                                placeholder='E-MAIL' 
                                value={this.state.email}
                                style={styles.Input}
                                onChangeText={(email) => this.setState({email})}
                            />
                            <AuthInput
                                icon='lock'
                                placeholder='Senha'
                                value={this.state.password}
                                style={styles.Input}
                                onChangeText={(password) => this.setState({password})}
                                secureTextEntry={true}
                            />
                            {
                                this.state.stateNew && (
                                    <AuthInput
                                        icon='asterisk'
                                        placeholder='Confirmação de Senha'
                                        value={this.state.confirmPassword}
                                        style={styles.Input}
                                        onChangeText={(confirmPassword) => this.setState({confirmPassword})}
                                        secureTextEntry={true}
                                    />
                                )
                            }
                            <TouchableOpacity onPress={this.signinOrSignup}>
                                <View style={styles.Button}>
                                    <Text style={styles.ButtonText}>
                                        {
                                            this.state.stateNew ? 'Registrar' : 'Entrar'
                                        }
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity 
                            style={{padding: 10}}
                            onPress={(stateNew) => this.setState({ stateNew: !this.state.stateNew })}
                        >
                            <Text style={styles.ButtonText}>
                                {
                                    this.state.stateNew ? 'Já possui conta?' : 'Ainda não possui conta?'
                                }
                            </Text>
                        </TouchableOpacity>
                    </ImageBackground>
                </SafeAreaView>
            </GestureHandlerRootView>
        );
    }
}

const styles = StyleSheet.create ({
    Background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    Title: {
        fontFamily: commonStyles.FontFamily,
        color: commonStyles.Colors.Secondary,
        fontSize: 70,
        marginBottom: 10
    },
    FormContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
        width: "90%"
    },
    Input:{
        marginTop: 10,
        backgroundColor: '#FFF'
    },
    Button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 5
    },
    ButtonText: {
        fontFamily: commonStyles.FontFamily,
        color: '#FFF',
        fontSize: 20,
    },
    Subtitle: {
        fontFamily: commonStyles.FontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10
    }
});