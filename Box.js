import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

function Box({id, title, description, image, stock}) {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Image 
                style={{ width: 150, height: 150 }}
                source={{ uri: image}}
            />
            <Text>{title}</Text>
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
                        })
                    }
                />
        </View>
    );
}

const styles = StyleSheet.create({
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