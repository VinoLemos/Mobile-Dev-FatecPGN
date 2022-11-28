import React from 'react';
import { View, Text, Button} from 'react-native';
import { useNavigation } from '@react-navigation/native';
 
 
export default function Profile() {
  const navigation = useNavigation();
 return (
   <View>
     <Text>Perfil</Text>
     <Button
     title="Home"
     onPress={ () => navigation.navigate('Home') }/>
     <Button
     title="Abrir menu"
     onPress={ () => navigation.toggleDrawer() } />
   </View>
  );
}
