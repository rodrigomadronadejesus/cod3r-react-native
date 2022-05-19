import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';


import params from './Params';
import Field from "./components/Field";


export default class App extends Component {


    render (){
        return (
            <View>
                <Text>Iniciando o Mines!</Text>
                <Text>Tamanho da grade: </Text>

                <Field/>
            </View>
        );
    }
}


const styles = StyleSheet.create ({

});