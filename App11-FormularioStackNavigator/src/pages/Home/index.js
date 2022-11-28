import { View, Text, Button, Header } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';

export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>


            <Text>Bem-Vindo!</Text>
            <Text>Clique no botão abaixo para abrir sua conta</Text>
            <Button
                title="Abrir conta"
                onPress={() => navigation.navigate('Conta')}
            />
        </View>
    );
}