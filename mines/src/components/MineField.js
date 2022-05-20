import React from "react";
import { View,  StyleSheet } from "react-native";
import Field from "./Field";

export default props => {
    const rows = props.board.map((rows, r) => {
        const columns = rows.map((field, c) => {
            return <Field {...field} key={c}/>
        });

        return (
            <View key={r} style={{ flexDirection: 'row' }}>{columns}</View>
        );
    });

    return (
        <View style={styles.Container}>
            {rows}
        </View>
    )
}


const styles = StyleSheet.create ({
    Container: {
        backgroundColor: '#EEE',
    }
});