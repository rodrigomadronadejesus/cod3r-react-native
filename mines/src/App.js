import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';


import params from './Params';
import Field from "./components/Field";


export default class App extends Component {


    render (){
        return (
            <View>
                <Text>Iniciando o Mines!</Text>
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
            </View>
        );
    }
}


const styles = StyleSheet.create ({

});