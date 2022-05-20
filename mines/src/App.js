import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';


import params from './Params';
import Field from "./components/Field";


export default class App extends Component {


    render (){
        return (
            <View style={styles.Container}>
                <Text style={styles.Welcome}>Iniciando o Mines!</Text>
                <Text>
                    Tamanho da grade: 
                    {params.getRowsAmount()}x{params.getColumnsAmount()}
                </Text>
                <Field/>
                <Field opened/>
                <Field opened nearMines={1}/>
                <Field opened nearMines={2}/>
                <Field opened nearMines={3}/>
                <Field opened nearMines={6}/>
                <Field mined/>
                <Field mined opened/>
                <Field mined opened exploded/>
                <Field flagged/>
                <Field flagged opened/>
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    Welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    }
});