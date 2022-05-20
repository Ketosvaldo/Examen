import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';
function Box({id, title, description, image, stock, stockf}) {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Image 
                style={{ width: 150, height: 150 }}
                source={{ uri: image}}
            />
            <Text style={styles.titulo}>{title}</Text>
            <Text>{description}</Text>
                <Button
                    color="#455a64"
                    title="Ver"
                    onPress={
                        () => navigation.navigate('Detalles', {
                            id: id,
                            title: title,
                            description: description,
                            image: image,
                            stock: stock,
                            stockf: stockf,
                        })
                    }
                />
        </View>
    );
}

const styles = StyleSheet.create({
    titulo:{
        fontSize: 20,
        fontWeight: 'bold',
    },
    root:{
        width: 180,
        height: 300,
        justifyContent: "space-around", 
        alignItems: "center",
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 8,
        margin: 20,
    }
})
export default Box;