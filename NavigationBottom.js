import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
function NavigationBottom() {
    const navigation = useNavigation();
    return (
        <View style={styles.root}>
            <Button
                color="9a8ccc"
                title="Atrás"
                onPress={() => navigation.goBack()}
            />
            <Button
                color="9a8ccc"
                title="Home"
                onPress={() => navigation.popToTop()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#ffffc2',

        padding: 5,
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0
    }
})

export default NavigationBottom;