import React, { Fragment } from "react";
import { View, Text } from 'react-native';

import Estilo from '../Estilo/estilo';

/*
    <React.Fragment>
    </React.Fragment>
    <>
    </>
*/

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.fontG}>{props.principal}</Text>
            <Text>{props.secundario}</Text>
        </Fragment>
    );
}