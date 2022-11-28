import { View, Text, Button } from "react-native";
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { useNavigation, StackActions } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-web";

export default function Sobre() {

  const navigation = useNavigation()
  const route = useRoute();

  const nome = route.params.nome;
  const idade = route.params.idade;
  const sexo = route.params.sexo;
  const escolaridade = route.params.escolaridade;
  const brasileiro = route.params.brasileir;
  const limite = route.params.limite.toFixed(0);

  const editar = () => {
    navigation.goBack();
  }
  return (
    <View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={editar}
      >
        Editar dados
      </TouchableOpacity>


        <Text>Sobre</Text>
        <Text>{nome}</Text>
        <Text>{idade}</Text>
        <Text>{sexo}</Text>
        <Text>{escolaridade}</Text>
        <Text>{brasileiro}</Text>
        <Text>{limite}</Text>
    </View>
  );
}