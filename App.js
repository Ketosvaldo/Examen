import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import StoreScreen from './StoreScreen';
import DetailScreen from './DetailScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name ="Home" component={HomeScreen}/>
        <Stack.Screen name ="Tienda" component={StoreScreen} options={{title:"Tienda"}}/>
        <Stack.Screen name ="Detalles" component={DetailScreen} options = {{title:"Detalles"}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}