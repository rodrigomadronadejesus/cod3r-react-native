import React, { Fragment } from "react";
import { Text, FlatList } from 'react-native';
import Estilo from '../Estilo/estilo';
import Produtos from "./Produtos";

export default props => {

    const produtoRender = ({ item: p

    }) => {
        return (
            <Text>{p.id}) {p.nome} - R$ {p.preco}</Text>
        );
    }

    return (
        <Fragment>
            <Text style={Estilo.fontG}>
                Lista de Produtos V2
            </Text>
            <FlatList
                data={Produtos}
                keyExtractor={ i => `${i.id}` }
                renderItem={produtoRender}
            />
        </Fragment>
    );
}