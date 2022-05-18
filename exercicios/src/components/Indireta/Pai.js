
import React, { useState, Fragment } from "react";
import { Text } from 'react-native';
import Estilo from "../Estilo/estilo";

import Filho from './Filho';

export default props => {

    const [ num, setNum ] = useState(0);
    const [ texto, setTexto ] = useState('');

    function exibirValor(numero, inicial){
        setNum(numero);
        setTexto(inicial);
    }

    return (
        <Fragment>
            <Text style={Estilo.fontG}>{texto}{num}</Text>
            <Filho 
                min={1} 
                max={60}
                funcao={exibirValor}
            />
        </Fragment>
    );
}

