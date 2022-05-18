import React, { Fragment } from "react";
import { Text } from 'react-native';
import Estilo from '../Estilo/estilo';
import Produtos from "./Produtos";

export default props => {

    function obterLista (){
        return Produtos.map (p => {
            return (
                <Text key={`${p.id}`}>
                    {p.id}) {p.nome} tem preço R$ {p.preco}
                </Text>
            );
        });
    }

    return (
        <Fragment>
            <Text style={Estilo.fontG}>
                Lista de Produtos
            </Text>
            {obterLista()}
        </Fragment>
    );
}