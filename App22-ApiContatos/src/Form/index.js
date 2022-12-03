import { useState} from 'react';
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import api from '../services/api';

export default function Form({route}) {
    const [id, setId] = useState(route.params?.id);
    const [novoNome, setNovoNome] = useState(route.params?.nome);
    const [novoEmail, setNovoEmail] = useState(route.params?.email);
    const [novoGithub, setNovoGithub] = useState(route.params?.github);
    const [novoLinkedin, setNovoLinkedin] = useState(route.params?.linkedin);
    const [novoCelular, setNovoCelular] = useState(route.params?.celular);

    const navigation = useNavigation();

    const salvarContato = async () => {
        const body = JSON.stringify({
            nome: novoNome,
            email: novoEmail,
            github: novoGithub,
            linkedin: novoLinkedin,
            celular: novoCelular,
        })

        if (id !== undefined) {
            const response = await api.put(`/contatos/${id}`, body, {headers: {'Content-Type': 'application/json'}});
            await route.params?.atualizarLista();
        } else {
            const response = await api.post('/contatos', body, {headers: {'Content-Type': 'application/json'}});
            await route.params?.atualizarLista();
        }

        navigation.goBack()
    }

    return(
        <View>
            <TextInput
            style={styles.input}
            defaultValue={route.params?.title}
            onChangeText={(text)=> setNewTitle(text)}
        />
    
        <TextInput
            style={styles.input}
            defaultValue={route.params?.description}
            onChangeText={(text)=> setNewDescription(text)}
        />
    
        <Button title="Salvar" onPress={salvarTarefa} />
        </View>
    )
}

const styles = StyleSheet.create({
    input:{
      width: 350,
      height: 40,
      borderColor: '#DDD',
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#FFF',
      margin: 4,
    }
});  
