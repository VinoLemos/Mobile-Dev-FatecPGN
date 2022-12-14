import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Home() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Home</Text>
     <Button
     title="Perfil"
     onPress={ () => navigation.navigate('Perfil') }/>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />
   </View>
  );
}
