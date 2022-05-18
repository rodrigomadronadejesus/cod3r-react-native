import React, { Component, Fragment } from "react";
import { Text, TextInput, Button, View } from 'react-native';

import Estilo from '../Estilo/estilo';
import MegaNumero from './Numero';

export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros,
        numeros: []
    }

    alterarQtdeNumero = (qtde) => {
        this.setState({ qtdeNumeros: qtde });
    }

    // alterarQtdeNumero(qtde){
    //     this.setState({ qtdeNumeros: qtde });
    // }
    

    // (1)
    // constructor (props){
    //     super(props);

    //     this.alterarQtdeNumero = this.alterarQtdeNumero.bind(this);
    // }

    // (2)
    // constructor (props){
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros + 1000
    //     }
    // }


    gerarNumeroNaoContido = nums => {
        const novo = parseInt(Math.random() * 60) + 1;
        return nums.includes(novo) ? this.gerarNumeroNaoContido(nums): novo;
    }

    // gerarNumeros (){
    //     const numeros = Array(parseInt(this.state.qtdeNumeros))
    //     .fill()
    //     .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
    //     .sort((a, b) => a - b);
    //     this.setState({ numeros });
    // }

    gerarNumeros (){
        const { qtdeNumeros } = this.state;
        const numeros = [];

        for (let i = 0; i < qtdeNumeros; i++){
            numeros.push(this.gerarNumeroNaoContido(numeros));
        }

        numeros.sort((a, b) => a - b);

        this.setState({ numeros });
    }

    exibirNumeros = () => {
        const nums = this.state.numeros;
        
        return  nums.map( (num2, index) => {
            return (
                <MegaNumero key={index} num={num2}/>
            );
        });
    }

    render (){
        return (
            <Fragment>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput 
                    keyboardType={'numeric'}
                    style={{ borderBottomWidth: 1 }}
                    placeholder="Qtde de Números" 
                    value={`${this.state.qtdeNumeros}`}
                    // onChangeText={(qtde) => this.alterarQtdeNumero(qtde)}
                    onChangeText={this.alterarQtdeNumero}
                />
                <Button
                    title="Gerar"
                    onPress={this.gerarNumeros.bind(this)}
                />
                <View style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    {
                        this.exibirNumeros()
                    }
                </View>
            </Fragment>
        );
    }
}
