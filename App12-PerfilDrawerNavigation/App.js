import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
 
const Drawer = createDrawerNavigator();
 
import Home from './src/pages/Home';
 
export default function App(){
  return(
  <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen 
      name="Home" 
      component={Home} 
      />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
