import React from 'react';
import {StyleSheet, View, Image, Text, Button} from 'react-native';

function DetailScreen({route}) {
    const {image, title, description, stock, stockf} = route.params;

    return (
        <View style={styles.root}>
            <Image source={{uri: image}} style={styles.containerImage}/>
            <Button 
                title="Buy"
                disabled = {stockf}
            />
            <View style={styles.containerBox}>
                <Text style={styles.containerTitle}>{title}</Text>
                <Text>{description}</Text>
                <Text>En stock: {stock}</Text>
            </View>
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
    containerImage:{
        width: 200, 
        height:200, 
        borderRadius: 10,
        borderWidth: 3
    },
    containerTitle:{
        fontSize: 30,
        fontWeight: 'bold',
    },
    containerDesc:{
        fontSize: 15,
    },
    containerBox:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: 200,
        backgroundColor: 'lightgray'
    },

})
export default DetailScreen;