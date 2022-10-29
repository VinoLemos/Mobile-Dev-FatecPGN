import { View, Text, Button } from "react-native";
import { useNavigation} from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View>
        <Text>Bem-Vindo!</Text>
        <Text>Clique no botão abaixo para abrir sua conta</Text>
        <Button
            title="Abrir conta"
            onPress={ () => navigation.navigate('Conta') }
            />
    </View>
    );
}