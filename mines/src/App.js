import React, { Component } from "react";
import { Text, View, StyleSheet } from 'react-native';


import params from './Params';
import Field from "./components/Field";
import MineField from "./components/MineField";
import { createMinedBoard } from "./functions";


export default class App extends Component {


    constructor (props){
        super(props);
        this.state = this.createState();
    }

    minesAmount = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();

        return Math.ceil(cols * rows * params.difficultLevel);
    }

    createState = () => {
        const cols = params.getColumnsAmount();
        const rows = params.getRowsAmount();

        return {
            board: createMinedBoard(rows, cols, this.minesAmount())
        };
    }

    render (){
        return (
            <View style={styles.Container}>
                <Text style={styles.Welcome}>Iniciando o Mines!</Text>
                <Text>
                    Tamanho da grade: 
                    {params.getRowsAmount()}x{params.getColumnsAmount()}
                </Text>
                <View style={styles.board}>
                    <MineField board={this.state.board}/>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create ({
    Container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    board: {
        alignItems: "center",
        backgroundColor: '#AAA'
    }
});