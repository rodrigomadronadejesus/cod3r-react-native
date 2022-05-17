import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';

import Estilo from '../Estilo/estilo';

export default props => {

    const [ numero, setNumero ] = useState(props.inicial);

    const inc = () => setNumero(numero + props.passo);
    const dec = () => setNumero(numero - props.passo);

    return (
        <>
            <Text style={Estilo.fontG}>{numero}</Text>
            <View>
                <Button title="+" onPress={inc}/>
                <Button title="-" onPress={dec}/>
            </View>
        </>
    );
}