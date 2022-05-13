import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import NavigationBottom from './NavigationBottom';

function DetailScreen({title, description, image, stock}) {
    return (
        <View style={styles.root}>
            <Image source={{uri: image}}/>
            <Text>{title}xd</Text>
            <Text>{description}</Text>
            <Text>{stock}</Text>
            <NavigationBottom/>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ccff90',
        color: '#000000',
    },

    containerBox:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },

})
export default DetailScreen;