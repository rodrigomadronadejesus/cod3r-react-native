import React, { Fragment, useState } from 'react';
import { Text } from 'react-native';

import Estilo from '../Estilo/estilo';
import ContadorDisplay from './ContadorDisplay';
import ContadorBotoes from './ContadorBotoes';

export default _ => {
    const [ num, setNum ] = useState(0);

    const inc = () => setNum(num + 1);
    const dec = () => setNum(num - 1);

    return (
        <Fragment>
            <Text style={Estilo.fontG}>Contador</Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec}/>
        </Fragment>
    );
}