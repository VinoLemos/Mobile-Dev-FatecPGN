import { useState, useEffect } from "react";
import {View, Text, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator, Button} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import api from '../services/api';

export default function Contatos() {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(async () => {
        await carregarContatos()
        setLoading(false)
    }, [])

    const carregarContatos = async () => {
        const response = await api.get('/contatos')
        setContatos(response.data)
    }

    const navigation = useNavigation();

    async function irFormulario() {
        navigation.navigate('Formulario', {atualizarLista: carregarContatos});
    }

    if(loading) {
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', flex:1}}>
                <ActivityIndicator color="#09A6FF" size={40}/>
            </View>
        )
    } else {
        return(
            <View style={styles.container}>
                <Button title="Adicionar" onPress={irFormulario}/>
        
                <FlatList
                    data={tarefas}
                    keyExtractor={item => item.id.toString() }
                    renderItem={ ({item}) => <Card data={item} funcCarregarContatos={carregarContatos} /> }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
      shadowColor: '#000',
      backgroundColor: '#FFF',
      shadowOffset: {width:0, height: 1},
      shadowOpacity: 0.8,
      margin: 15,
      shadowRadius: 5,
      borderRadius: 5,
      elevation: 3,
    },
    texto:{
      fontSize: 10,
      padding: 15,
    },
    btnEditar: {
      borderRadius: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
      backgroundColor: "yellow",
      marginVertical: 0,
      marginLeft: 10
    },
    btnExcluir: {
      borderRadius: 5,
      marginVertical: 20,
      alignSelf: 'flex-start',
      backgroundColor: "gray",
      marginVertical: 0,
      marginLeft: 10,
      backgroundColor: "tomato",
      marginTop: 10,
      marginBottom: 10
    },
});