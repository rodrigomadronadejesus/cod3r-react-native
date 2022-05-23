import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, Modal } from 'react-native';


export default props => {
    return (
        <Modal 
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.Frame}>
                <View style={styles.Container}>
                    <Text style={styles.Title}>Selecione o nível</Text>
                    <TouchableOpacity
                        style={[styles.Button, styles.BGEasy]}
                        onPress={() => props.onLevelSelected(0.1)}
                    >
                        <Text style={styles.ButtonLabel}>
                            Fácil
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.Button, styles.BGNormal]}
                        onPress={() => props.onLevelSelected(0.2)}
                    >
                        <Text style={styles.ButtonLabel}>
                            Intermediário
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.Button, styles.BGHard]}
                        onPress={() => props.onLevelSelected(0.3)}
                    >
                        <Text style={styles.ButtonLabel}>
                            Difícil
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    Frame:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0,0, 0.6)'
    },
    Container:{
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    Button:{
        marginTop: 10,
        padding: 5
    },
    ButtonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold'
    },
    BGEasy: {
        backgroundColor: '#49b65d'
    },
    BGNormal: {
        backgroundColor: '#2765F7'
    },
    BGHard: {
        backgroundColor: '#F26337'
    }
});