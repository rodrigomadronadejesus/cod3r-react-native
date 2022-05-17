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
import { View, SafeAreaView } from 'react-native';

import Primeiro from './components/Primeiro/Primeiro';
import X, { Comp1, Comp2 } from './components/Multi/Multi'

export default () => {
    return (
        <SafeAreaView> 
            <View> 
                {/* <Primeiro/>  */}
                <Comp1/>
                <Comp2/>
                <X/>
            </View> 
        </SafeAreaView>
    );
}