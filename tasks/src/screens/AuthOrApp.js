import React, { Component } from 'react';
import { 
    View,
    ActivityIndicator,
    StyleSheet
} from 'react-native';


export default class AuthOrApp extends Component {

    render () {
        return (
            <View style={styles.Container}>
                <ActivityIndicator size='large'/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
});