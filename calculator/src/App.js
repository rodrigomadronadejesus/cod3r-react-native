import React, { Component } from "react";
import { View, Text, StyleSheet } from 'react-native';


import Button from './components/Button';
import Display from "./components/Display";

export default class App extends Component {

    state = {
        displayValue: '0'
    }

    render (){

        return (
            <View style={styles.Container}>
                <Display value={this.state.displayValue}/>
                <View style={styles.Buttons}>
                    <Button label='AC'/>
                    <Button label='/'/>
                    <Button label='7'/>
                    <Button label='8'/>
                    <Button label='9'/>
                    <Button label='*'/>
                    <Button label='4'/>
                    <Button label='5'/>
                    <Button label='6'/>
                    <Button label='-'/>
                    <Button label='1'/>
                    <Button label='2'/>
                    <Button label='3'/>
                    <Button label='+'/>
                    <Button label='0'/>
                    <Button label='.'/>
                    <Button label='='/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1
    },
    Buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});