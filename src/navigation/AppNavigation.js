import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HomeScreen} from '../screens/HomeScreen'
import {DemoScreen} from '../screens/DemoScreen'

const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} options={{title: 'Home'}} />
        <Drawer.Screen name="Demo" component={DemoScreen} options={{title: 'Demo'}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}