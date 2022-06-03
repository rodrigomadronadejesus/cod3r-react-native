import React, { Component } from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';

import Author from './Author';

class Post extends Component {
    render (){
        return (
            <View style={styles.Container}>
                <Image
                    source={this.props.image}
                    style={styles.Image}
                />
                <Author email='rodrigomadronadejesus' nickname='Rodrigo de tal'/>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    Container: {
        flex: 1
    },
    Image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
});

export default Post;