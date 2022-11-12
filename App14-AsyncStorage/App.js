import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Linking, Switch } from 'react-native'
import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { styles } from './styles'

import AsyncStorage from '@react-native-async-storage/async-storage'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import { RootSiblingParent } from 'react-native-root-siblings';
import * as Clipboard from 'expo-clipboard';


export default function App() {



  const [Quote, setQuote] = useState('Loading...');
  const [Author, setAuthor] = useState('Loading...');
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState(false);

  const lightMode = () => {
    setMode(!mode);
  }

  const randomQuote = () => {
    setIsLoading(true);
    fetch("https://api.quotable.io/random").then(response => response.json()).then(result => {
      //console.log(result.content);
      setQuote(result.content);
      setAuthor(result.author);
      setIsLoading(false);
    })
  }

  const speak = () => {
    Speech.stop();
    Speech.speak(Quote + ' by ' + Author);
  }

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(Quote);
    Toast.show('Copied to clipboard!',
      {
        duration: Toast.durations.LONG,
      });
  }

  const tweetNow = () => {
    const url = "https://twitter.com/intent/tweet?Text=" + Quote;
    Linking.openURL(url)
  }

  useEffect(() => {
    randomQuote();
  }, [])

  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" />

      <Switch styles={styles.switch}
        value={mode}
        onValueChange={lightMode}
      />

      <FontAwesome5 name="sun" size={22} color='#53272F0' />

      <View style={styles.quoteContainer}>

        <Text style={styles.text}>Quote of the day</Text>

        <FontAwesome5 name="quote-left" style={{ fontSize: 20, marginBottom: -12 }} color="#000" />

        <Text style={styles.quote}>
          {Quote}
        </Text>

        <FontAwesome5 name="quote-right" style={{ fontSize: 20, textAlign: 'right', marginTop: -50, marginBottom: 20 }} color="#000" />

        <Text style={styles.author}>— {Author} </Text>

        <TouchableOpacity onPress={randomQuote}
          style={{
            backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : 'rgba(83, 114, 240, 1)',
            padding: 20,
            borderRadius: 30,
            _marginVertical: 20, get marginVertical() {
              return this._marginVertical;
            },
            set marginVertical(value) {
              this._marginVertical = value;
            },
          }}>

          <Text style={styles.newQuote}>
            {isLoading ? "Loading..." : "New Quote"}
          </Text>

        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

          <TouchableOpacity onPress={speak} style={styles.buttons}>
            <FontAwesome name="volume-up" size={22} color='#53272F0' />
          </TouchableOpacity>

          <TouchableOpacity onPress={copyToClipboard} style={styles.buttons}>
            <FontAwesome5 name="clipboard" size={22} color='#53272F0' />
          </TouchableOpacity>

          <TouchableOpacity onPress={tweetNow} style={styles.buttons}>
            <FontAwesome name="twitter" size={22} color='#53272F0' />
          </TouchableOpacity>

        </View>

      </View>
    </View>
  )
}

