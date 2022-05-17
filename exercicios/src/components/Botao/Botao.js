import React from "react";
import { Button } from 'react-native';

export default props => {

    function executar1 (){
        console.warn("Exec #01!!!!");
    }

    function executar2 (){
        console.warn("Exec #02!!!!");
    }

    function executar3 (){
        console.warn("Exec #03!!!!");
    }

    return (
        <>
            <Button
                title="Executar #01"
                onPress={executar1}
            />
            <Button
                title="Executar #02"
                onPress={executar2}
            />
            <Button
                title="Executar #03"
                onPress={executar3}
            />
        </>
    );
}