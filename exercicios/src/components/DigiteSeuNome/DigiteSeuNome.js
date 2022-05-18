import React, { useState } from "react";
import { View, Text, TextInput } from 'react-native';
import Estilo from '../Estilo/estilo';

export default props => {

    const [ nome, setNome ] = useState("teste");

    return (
        <View>
            <Text style={Estilo.style}>Valor do campo: {nome}</Text>
            <TextInput
                placeholder="Digite seu nome: "
                value={nome}
                onChangeText={(nome) => setNome(nome)}
            />
        </View>
    );
}

