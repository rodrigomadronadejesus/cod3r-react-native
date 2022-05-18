import React, { Fragment } from "react";
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';

import If from "./If";

export default props => {
    const usuario = props.usuario || {};
    return (
        <Fragment>
            <If teste={usuario && Object.keys(usuario).length !== 0}>
                <Text style={Estilo.fontG}>Usuário Logado: </Text>
                <Text style={Estilo.fontG}>{usuario.nome} - {usuario.email}</Text>
            </If>
        </Fragment>
    );
}