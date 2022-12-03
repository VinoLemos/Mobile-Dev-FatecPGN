import React, { useState } from 'react'

import { StyleSheet, Text, View, TextInput, Picker, TouchableOpacity } from 'react-native';

import api from './src/services/api';

export default function App() {
  const [valor, setValor] = useState("");
  const [moedaOrigem, setMoedaOrigem] = useState("Selecionar");
  const [moedaDestino, setMoedaDestino] = useState("Selecionar");
  const [dados, setDados] = useState([]);
  const [cotacao, setCotacao] = useState("");
  const [valorConvertido, setValorConvertido] = useState("");

  const converterMoeda = () => {
    if (moedaOrigem == 'BRL' && moedaDestino == 'USD') {
      api.get(`/BRL-USD`).then((response) => {
        console.log(response.data);
      })
    }
  }

  return (
    <View style={styles.container}>
      <Text>Conversor de moedas</Text>

      <Text>Valor: 
        <TextInput 
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        /> 
      </Text>

      <Text>De: 
        <Picker selectedValue={moedaOrigem} onValueChange={(moedaOrigem) => setMoedaOrigem(moedaOrigem)}>
          <Picker.Item value={""} label="Selecionar"/>
          <Picker.Item value={"BRL"} label="Real"/>
          <Picker.Item value={"USD"} label="Dólar"/>
          <Picker.Item value={"EUR"} label="Euro"/>
          <Picker.Item value={"BTC"} label="Bitcoin"/>
        </Picker>
      </Text>

      <Text>Para: 
      <Picker selectedValue={moedaDestino} onValueChange={(moedaDestino) => setMoedaDestino(moedaDestino)}>
      <Picker.Item value={""} label="Selecionar"/>
          <Picker.Item value={"BRL"} label="Real"/>
          <Picker.Item value={"USD"} label="Dólar"/>
          <Picker.Item value={"EUR"} label="Euro"/>
          <Picker.Item value={"BTC"} label="Bitcoin"/>
        </Picker>
      </Text>

      <TouchableOpacity onPress={converterMoeda}>
        <Text>Converter</Text>
      </TouchableOpacity>

      <Text>
        {valorConvertido}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});