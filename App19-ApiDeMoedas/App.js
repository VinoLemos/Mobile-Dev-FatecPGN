import { StyleSheet, Text, View, TextInput, Picker } from 'react-native';

import api from './src/services/api';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Conversor de moedas</Text>

      <Text>Valor: <TextInput/> </Text>

      <Text>De: 
        <Picker>
          <Picker.Item value="" label="Selecionar"/>
          <Picker.Item value="" label="Real"/>
          <Picker.Item value="" label="Dólar"/>
          <Picker.Item value="" label="Euro"/>
          <Picker.Item value="" label="Bitcoin"/>
        </Picker>
      </Text>
      <Text>Para: 
      <Picker>
          <Picker.Item value="" label="Selecionar"/>
          <Picker.Item value="" label="Real"/>
          <Picker.Item value="" label="Dólar"/>
          <Picker.Item value="" label="Euro"/>
          <Picker.Item value="" label="Bitcoin"/>
        </Picker>
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
