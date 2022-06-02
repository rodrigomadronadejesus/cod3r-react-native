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

import Login from '../../assets/imgs/login.jpg';
import commonStyles from '../commonStyles';

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
            Alert.alert('Sucesso!', 'Criar conta');
        }
        else {
            Alert.alert('Sucesso', 'Logar')
        }
    }

    render (){
        return (
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
                            <TextInput 
                                placeholder='Nome'
                                style={styles.Input}
                                value={this.state.name}
                                onChangeText={(name) => this.setState({name})}

                            />
                        )

                    }
                    <TextInput
                        placeholder='E-MAIL' 
                        value={this.state.email}
                        style={styles.Input}
                        onChangeText={(email) => this.setState({email})}
                    />
                    <TextInput
                        placeholder='Senha'
                        value={this.state.password}
                        style={styles.Input}
                        onChangeText={(password) => this.setState({password})}
                        secureTextEntry={true}
                    />
                    {
                        this.state.stateNew && (
                            <TextInput
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
        backgroundColor: '#FFF',
        padding: Platform.OS == 'ios' ? 15: 10
    },
    Button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center'
    },
    ButtonText: {
        fontFamily: commonStyles.FontFamily,
        color: '#FFF',
        fontSize: 20,
        fontWeight: 'bold'
    },
    Subtitle: {
        fontFamily: commonStyles.FontFamily,
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
        fontWeight: 'bold'
    }
});