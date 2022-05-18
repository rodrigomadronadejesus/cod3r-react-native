import React, { Component, Fragment } from "react";
import { Text, TextInput } from 'react-native';

import Estilo from '../Estilo/estilo';


export default class Mega extends Component {

    state = {
        qtdeNumeros: this.props.qtdeNumeros + 2000
    }

    alterarQtdeNumero(qtde){
        this.setState({ qtdeNumeros: qtde });
    }

    // constructor (props){
    //     super(props)

    //     this.state = {
    //         qtdeNumeros: props.qtdeNumeros + 1000
    //     }
    // }

    render (){
        return (
            <Fragment>
                <Text style={Estilo.fontG}>
                    Gerador de Mega-Sena {this.state.qtdeNumeros}
                </Text>
                <TextInput 
                    placeholder="Qtde de Números" 
                    value={this.state.qtdeNumeros}
                    onChangeText={qtde => this.alterarQtdeNumero(qtde)}
                />
            </Fragment>
        );
    }
}
