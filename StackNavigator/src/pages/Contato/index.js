import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
 
export default function Contato() {
 const navigation = useNavigation();
 
 return (
   <View>
     <Text>Contato</Text>
     <Button
     title="Voltar tela (Sobre)"
     onPress={ () => navigation.goBack() }
     />
     <Button
     title="Voltar para tela Home"
     onPress={ () => navigation.dispatch(StackActions.popToTop())  }  
     />
   </View>
  );
}
