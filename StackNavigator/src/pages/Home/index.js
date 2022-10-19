import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation} from '@react-navigation/native';
import { styles } from './styles';

export default function Home(){
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text>Bem-Vindo!</Text>
            <Text>Clique no botão abaixo para abrir sua conta</Text>
            <Button
                title="Abrir conta"
                onPress={ () => navigation.navigate('Conta') }
                style={styles.botao}/>
        </View>
    )
}
