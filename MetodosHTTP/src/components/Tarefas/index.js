import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Button} from 'react-native';
import api from '../../services/api';
import Card from '../../components/Card';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'
 
export default function Tarefas() {
  const [tarefas, setTarefas] = useState([])
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState();
 
  useEffect(async () => {
    await carregarTarefas()
    setLoading(false)
  }, [])
 
  const carregarTarefas = async () => {
    const response = await api.get('/tasks')
    setTarefas(response.data)
  }

  const carregarTarefa = async () => {
    const response = await api.get(`/tasks${id}`)
    setTarefas(response.data)
  }
 
  const navigation = useNavigation();
 
  async function irFormulario(){
      navigation.navigate('Formulario', {atualizarLista: carregarTarefas});
  }
 
  if(loading){
    return(
      <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
        <ActivityIndicator color="#09A6FF" size={40}/>
      </View>
    )
  }else{
    return(
      <View style={styles.container}>
        <Button title="Incluir" onPress={irFormulario}/>
 
        <FlatList
        data={tarefas}
        keyExtractor={item => item.id.toString() }
        renderItem={ ({item}) => <Card data={item} funcCarregarTarefas={carregarTarefas} /> }
        />
 
      </View>
    );
  }
}
