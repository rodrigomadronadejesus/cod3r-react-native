import React, { Fragment } from "react";
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';

export default props => {
    return (
        <Fragment>
            <Text style={Estilo.fontG}>[INÍCIO] Membros da Família: </Text>
            {props.children}
            <Text style={Estilo.fontG}>[FIM] Membros da Família: </Text>
        </Fragment>
    );
}