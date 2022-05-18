// import React from 'react';
// import { Text, SafeAreaView, View } from 'react-native';

// export default () => {
//     return (
//         <SafeAreaView>
//             <View>
//                 <Text>Sem Título</Text>
//             </View>
//         </SafeAreaView>
//     );
// }

// import React from "react";
// import { Text } from 'react-native';


// function App() {
//     return <Text>Primeiro Componente</Text>;
// }

// export default App;

// import React from "react";
// import { Text } from 'react-native';


// const App = function (){
//     return <Text>Primeiro Componente!</Text>;
// }

// export default App;

// export default function (){
//     return <Text>Primeiro Componente!</Text>;
// }

// export default () => {
//     return <Text>Primeiro Componente!03</Text>;
// }

// export default () => <Text>Primeiro Componente!!!</Text>;


import React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';

import ListaProdutosV2 from './components/Produtos/ListaProdutosV2';
// import ListaProdutos from './components/Produtos/ListaProdutos';
// import UsuarioLogado from './components/If/UsuarioLogado';
// import Familia from './components/Relacao/Familia';
// import Membro from './components/Relacao/Membro';
// import Parimpar from './components/Parimpar/parimpar';
// import Diferenciar from './components/Diferenciar/Diferenciar';
// import ContadorV2 from './components/Contador/ContadorV2';
// import Pai from './components/Indireta/Pai';
// import Pai from './components/Direta/Pai';
// import Contador from './components/Contador/Contador';
// import Botao from './components/Botao/Botao';
// import Frag from './components/Frag/Frag';
// import Aleatorio from './components/Aleatorio/Aleatorio';
// import MinMax from './components/MinMax/MinMax';
// import Primeiro from './components/Primeiro/Primeiro';
// import X, { Comp1, Comp2 } from './components/Multi/Multi';

export default () => {
    return (
        <SafeAreaView style={style.App}> 
            <View>
                <ListaProdutosV2/>
                {/*
                    <ListaProdutos/>
                    <UsuarioLogado usuario={{nome: 'Gui', email: 'gui@gui.com'}}/>
                    <UsuarioLogado usuario={{nome: 'Carlos', email: 'carlos@gui.com'}}/>
                    <Familia>
                        <Membro nome="bia" sobrenome="Arruda"/>
                        <Membro nome="Carlos" sobrenome="Arruda"/>
                    </Familia>
                    <Familia>
                        <Membro nome="Ana" sobrenome="Silva"/>
                        <Membro nome="Julia" sobrenome="Silva"/>
                    </Familia>
                    <Parimpar num={3}/>
                    <Diferenciar/>
                    <ContadorV2/>
                    <Pai/>
                    <Pai/>
                    <Contador inicial={100} passo={13}/>
                    <Botao/>
                    <Frag principal="Cadastro Produto" secundario="Tela de Cadastro"/>
                    <Aleatorio min={1} max={100}/>
                    <MinMax min={3} max={20}/>
                    <MinMax min={1} max={94}/>
                    <Primeiro/> 
                    <Comp1/>
                    <Comp2/>
                    <X/> 
                
                */}
            </View> 
        </SafeAreaView>
    );
}

const style = StyleSheet.create ({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20
    }
});