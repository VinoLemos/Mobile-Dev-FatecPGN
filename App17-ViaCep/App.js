import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>CEP X Endereço </Text>

      <TextInput
        placeholder='Digite o CEP...'
      />

      <TouchableOpacity>
        <AntDesign name='checksquareo'/>
      </TouchableOpacity>

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
