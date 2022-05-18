import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Estilo from '../Estilo/estilo';

export default props => {
    return (
        <View style={style.Container}>
            <Text style={[ Estilo.fontG, style.Num ]}>
                {props.num}
            </Text>
        </View>
    );
}

const style = StyleSheet.create ({
    Container: {
        height: 50,
        width: 50,
        backgroundColor: '#000',
        margin: 5,
        borderRadius: 25
    },
    Num: {
        color: '#FFF'
    }
});