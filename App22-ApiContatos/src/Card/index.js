import React, { useState } from 'react';

import api from '../services/api';

import { useNavigation } from '@react-navigation/native';

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

function Card({data, funcCarregarContatos}) {
    const [id, setId] = useState(data?.id);
    const [nome, setNome] = useState(data?.nome);
    const [email, setEmail] = useState(data?.email);
    const [github, setGithub] = useState(data?.github);
    const [linkedin, setLinkedin] = useState(data?.linkedin);
    const [celular, setCelular] = useState(data?.celular);

    const excluirContato = async () => {
        const response = await api.delete(`/contatos/${id}`);
        await funcCarregarContatos();
    }

    const navigation = useNavigation();

    async function irFormulario() {
        navigation.navigate('Formulario', {
            id: id,
            nome: nome,
            email: email,
            github: github,
            linkedin: linkedin,
            celular: celular,
            atualizarLista: funcCarregarContatos
        });
    }

    return(
        <View>
            <View style={styles.card}>
                <Text style={styles.texto}>{nome}</Text>
                <Text style={styles.texto}>{email}</Text>
                <Text style={styles.texto}>{github}</Text>
                <Text style={styles.texto}>{linkedin}</Text>
                <Text style={styles.texto}>{celular}</Text>

                <TouchableOpacity 
                    style={styles.btnEditar}
                    onPress={irFormulario}
                >
                    <Text>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={btnExcluir}
                    onPress={excluirContato}
                >
                    <Text>Excluir</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
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

export default Card;