import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import StoreScreen from './StoreScreen';
import DetailScreen from './DetailScreen';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="HOME" component={HomeScreen} />
      <Drawer.Screen name="TIENDA" component={StoreScreen} />
      <Drawer.Screen name="Detalles" component={DetailScreen} options={{drawerLabel: () => null,
        title: null,}}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}