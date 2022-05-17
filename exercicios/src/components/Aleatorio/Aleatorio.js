import React from 'react';
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';

export default ( { min, max } ) => {
    // const { min, max } = props;
    const numero = Math.floor(Math.random() * max + min);
    return (
        <Text style={Estilo.fontG}>Nº Aleatório: {numero} </Text>
    );
}