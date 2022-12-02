import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import api from './src/services/api';

export default function App() {
  
  const [cep, setCep] = useState("");
  const [cepInserido, setCepInserido] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  
  const buscarCEP = () => {

    api.get(`/${cepInserido}/json`).then((response) => {
      setCep(response.data.cep);
      setLogradouro(response.data.logradouro);
      setBairro(response.data.bairro);
      setCidade(response.data.localidade);
      setEstado(response.data.uf);
    })

  }

  return (
    <View style={styles.container}>
      <Text>CEP X Endereço </Text>

      <TextInput
        placeholder='Digite o CEP...'
        value={cepInserido}
        onChange={(e) => setCepInserido(e.target.value)}
      />

      <TouchableOpacity onPress={buscarCEP}>
        <AntDesign name='checksquareo'/>
      </TouchableOpacity>

      <View>
          <Text>CEP: </Text>
          <Text>{cep}</Text>
      </View>
      <View>
          <Text>Logradouro: </Text>
          <Text>{logradouro}</Text>
      </View>
      <View>
          <Text>Bairro: </Text>
          <Text>{bairro}</Text>
      </View>
      <View>
          <Text>Cidade: </Text>
          <Text>{cidade}</Text>
      </View>
      <View>
          <Text>Estado: </Text>
          <Text>{estado}</Text>
      </View>

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
