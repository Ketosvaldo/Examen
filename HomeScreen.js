import React from 'react';
import {Button, View, Text, Image} from 'react-native';
import styles from './styles';
import logoOxxO from './assets/logoOxxO.jpg';

function HomeScreen({navigation}) {
    return (
        <View>
            <Image source={logoOxxO} style={{width: null, resizeMode: 'contain', height: 250}}/>
            <Text style={{alignItems: 'center', justifyContent: 'center',}}>¡Siempre listos, siempre ahí!</Text>
            <Text style={{alignItems: 'center', justifyContent: 'center',}}>Si lo que quieres es abastecerte de comida en tu casa, comprar utensilios o simplemente armar una fiesta, OxxO es el lugar ideal para ti.</Text>
            <Button style={{marginBottom:10}}
                title="Ir a tienda"
                onPress={() => navigation.navigate("TIENDA")}
            />
        </View>
    );
}

export default HomeScreen;