import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

import api from './src/services/api';

export default function App() {

  const [login, setLogin] = useState("");
  const [id, setId] = useState("");
  const [nome, setNome] = useState("");
  const [repositorios, setRepositorios] = useState("");
  const [dataCriacao, setDataCriacao] = useState("");
  const [seguidores, setSeguidores] = useState("");
  const [seguindo, setSeguindo] = useState("");

  const buscarPerfil = () => {
    api.get(`/${login}`).then((response) => {
      setId(response.data.id);
      setNome(response.data.name);
      setRepositorios(response.data.repos);
      setDataCriacao(response.data.created_at);
      setSeguidores(response.data.followers);
      setSeguindo(response.data.following);
    })
  }

  return (
    <View style={styles.container}>
      <Text>Perfil dos Devs</Text>

      <TextInput
        placeholder='Digite o login Git'
        value={login}
        onChange={(e) => setLogin(e.target.value)}
      />

      <TouchableOpacity onPress={buscarPerfil}>
        <AntDesign name='checksquareo'/>
      </TouchableOpacity>

      <View>
        <Text>Id: {id}</Text>
      </View>
      <View>
        <Text>Nome: {nome}</Text>
      </View>
      <View>
        <Text>Repositórios: {repositorios}</Text>
      </View>
      <View>
        <Text>Criado em: {dataCriacao}</Text>
      </View>
      <View>
        <Text>Seguidores: {seguidores}</Text>
      </View>
      <View>
        <Text>Seguindo: {seguindo}</Text>
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
