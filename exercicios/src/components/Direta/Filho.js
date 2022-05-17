import React, {  Fragment } from "react";
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.fontG}>{props.a}</Text>
            <Text style={Estilo.fontG}>{props.b}</Text>
        </Fragment>
    );
}