import React, { Component } from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard, Switch} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles';
 
export default function App(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases</Text>

    <View style={styles.botoes}>
    <Text style={{paddingRight: '10px', paddingLeft:'10px', fontSize: 20}}>
      Dark Mode</Text>
      <Switch 
      />

    <Text>                                  </Text>

    <Text style={{paddingRight: '10px', paddingLeft:'10px', fontSize: 20}}>
      Dark Mode</Text>
      <Switch 
      />    
    
    </View>

    <View style={styles.frases}>
      <Text>Test</Text>
    </View>

    </View>
  )
}
 
