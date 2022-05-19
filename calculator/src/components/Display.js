import React from "react";
import {
    View, StyleSheet, Text
} from 'react-native';


const styles = StyleSheet.create ({
    Display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end'
    },
    DisplayValue: {
        fontSize: 60,
        color: '#fff'
    }
});

export default props => {

    return (
        <View style={styles.Display}>
            <Text style={styles.DisplayValue} numberOfLines={1}>{props.value}</Text>
        </View>
    );
}