import React, { useState, useEffect } from 'react'
import {View, Text, TouchableOpacity, } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles'
import { StatusBar } from 'expo-status-bar';
import Tts from 'react-native-tts';


Tts.setDefaultLanguage('en-US');
Tts.setDefaultVoice('com.apple.ttsbundle.Moira-compact');
Tts.setDefaultRate(0.5);
Tts.setDefaultPitch(1.2);

export default function App(){
  
  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
      //console.log(result.content);
      setQuote(result.content);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

  const speakNow = () => {
    Tts.speak(Quote);
  }

  useEffect(() => {
    randomQuote();
  },[])

  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content"/>

        <View style={styles.quoteContainer}>

          <Text style={styles.text}>Quote of the day</Text>

          <FontAwesome5 name="quote-left" style={{fontSize:20, marginBottom: -12}} color="#000"/>    

          <Text style={styles.quote}>
            {Quote}
          </Text>

          <FontAwesome5 name="quote-right" style={{fontSize:20, textAlign:'right', marginTop: -50, marginBottom: 20}} color="#000"/>        

          <Text style={styles.author}>— {Author} </Text>

          <TouchableOpacity onPress={randomQuote} 
          style={{backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
                  padding: 20,
                  borderRadius: 30,
                  marginVertical: 20,}}>
            
            <Text style={styles.newQuote}>
              {isLoading ? "Loading..." : "New Quote"}
            </Text>

          </TouchableOpacity>

          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>

            <TouchableOpacity onPress={speakNow} style={styles.buttons}>
                <FontAwesome name="volume-up" size={22} color='#53272F0'/>  
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}} style={styles.buttons}>
                <FontAwesome5 name="clipboard" size={22} color='#53272F0'/>  
            </TouchableOpacity>    

            <TouchableOpacity onPress={() => {}} style={styles.buttons}>
                <FontAwesome name="twitter" size={22} color='#53272F0'/>  
            </TouchableOpacity>    

          </View>

        </View>
    </View>
  )
}
 
