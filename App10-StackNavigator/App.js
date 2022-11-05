import React from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./styles";


import Home from "./src/pages/Home";
import Conta from "./src/pages/Conta";
import Sobre from "./src/pages/Sobre";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Conta" component={Conta} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}