import React, { useState, useEffect, useContext } from 'react'
import { View, Text, TouchableOpacity, Linking, Switch } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles'
import themeContext from '../../config/themeContext';

import SwitchWithIcons from "react-native-switch-with-icons";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Speech from 'expo-speech';
import * as Clipboard from 'expo-clipboard';
import { EventRegister } from 'react-native-event-listeners';


export default function Home() {

    const theme = useContext(themeContext);
    const [Quote, setQuote] = useState('Loading...');
    const [Author, setAuthor] = useState('Loading...');
    const [isLoading, setIsLoading] = useState(false);
    const [mode, setMode] = useState(false);

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
        <View style={[styles.container, { backgroundColor: theme.background }]}>

            <StatusBar barStyle="light-content" />

            <SwitchWithIcons value={mode}
                thumbColor={{true: "rgb(52, 149, 235)", false: "rgb(255, 255, 255)"}}
                iconColor={{true: "black    ", false: "#9499AD"}}
                onValueChange={(value) => {
                    setMode((value) => !value)
                    EventRegister.emit("changeTheme", value);
                }} />

            <View style={styles.toggle}>

            </View>

            <View style={[styles.quoteContainer, { backgroundColor: theme.quoteContainer }]}>

                <Text style={[styles.text, { color: theme.text }]}>Quote of the day</Text>

                <FontAwesome5 name="quote-left"
                    style={{
                        fontSize: 20,
                        marginBottom: -12,
                        color: theme.text
                    }}
                />

                <Text style={[styles.quote, {color: theme.quote}]}>
                    {Quote}
                </Text>

                <FontAwesome5 name="quote-right"
                    style={{
                        fontSize: 20,
                        textAlign: 'right',
                        marginTop: -50,
                        marginBottom: 20,
                        color: theme.text
                    }}
                />

                <Text style={styles.author}>— {Author} </Text>

                <TouchableOpacity onPress={randomQuote}
                    style={{
                        backgroundColor: isLoading ? 'rgba(83, 114, 240, 0.7)' : theme.button,
                        padding: 20,
                        borderRadius: 30,
                        _marginVertical: 20, get marginVertical() {
                            return this._marginVertical;
                        },
                        set marginVertical(value) {
                            this._marginVertical = value;
                        },
                    }}>

                    <Text style={[styles.newQuote, { color: theme.text }]}>
                        {isLoading ? "Loading..." : "New Quote"}
                    </Text>

                </TouchableOpacity>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <TouchableOpacity onPress={speak} style={styles.buttons}>
                        <FontAwesome name="volume-up" size={22} style={{color: theme.actionButton}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={copyToClipboard} style={styles.buttons}>
                        <FontAwesome5 name="clipboard" size={22} style={{color: theme.actionButton}} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={tweetNow} style={styles.buttons}>
                        <FontAwesome name="twitter" size={22} style={{color: theme.actionButton}} />
                    </TouchableOpacity>

                </View>

            </View>
        </View>
    )
}

