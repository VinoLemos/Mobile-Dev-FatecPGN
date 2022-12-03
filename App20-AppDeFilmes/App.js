import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { ActivityIndicator } from 'react-native-web';
import api from './src/services/api';
import styles from './styles';
import Filmes from './src/Filmes';

export default function App() {

  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.get('/')

      setFilmes(response.data)
      setLoading(false)
    }

    fetchData()
  })

  if (loading == true) {
    return (
      <View style={{
        alignItems: 'center', justifyContent: 'center',
        flex: 1
      }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>App de Filmes</Text>
        </View>

        <FlatList
          data={filmes}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => <Filmes data={item} />}
        />

      </View>
    )
  }

}
