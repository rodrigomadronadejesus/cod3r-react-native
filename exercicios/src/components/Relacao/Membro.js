import React from "react";
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';

export default props => {
    return (
        <Text style={Estilo.fontG}>{props.nome} {props.sobrenome}</Text>
    );
}