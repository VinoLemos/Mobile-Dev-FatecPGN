import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
 
class App extends Component{
  render(){
    const styles = StyleSheet.create(
      {
        title: {
          justifyContent: 'center',
          fontFamily: 'Courier',
          fontSize: 40, 
          fontStyle: 'bold',
          alignSelf: 'center',
          alignContent: 'center',
          color: '#090d14',
          backgroundColor: '#732f37',
          borderRadius: 35,
          borderWidth: 5,
          marginTop: 20,
          padding: 10
        },
        main: {
          alignSelf: 'center',
          backgroundColor: '#8c5a87',
          borderRadius: 15,
          padding: 10

        },
        heading2: {
          fontSize: 30, 
          fontStyle: 'bold',
          margin: 20,
          fontFamily: 'Courier',
          alignSelf: 'center',
          color: '#090d14'
        },
        content:{
          fontFamily: 'Courier',
          fontSize: 20,
          alignSelf: 'center',
          color: '#253e6b'
        },
        profileImage: {
          width: 300, 
          height: 400,
          alignSelf: 'center',
          marginTop: 40,
          marginBottom: 40,
          borderRadius: 30,
          height: '65%'
        },
        background: {
          flex: 1
        }
      }
    )
    const image = { uri: 'https://w.wallhaven.cc/full/5w/wallhaven-5w3l38.jpg'};
    const profileImage = { uri: 'https://cdn.dribbble.com/users/2924953/screenshots/9713958/sss.gif'};
    let nome = 'Vinícius Lemos de Oliveira';
    return(
        <ImageBackground source={image} resizeMode="cover" width= '100%' height= '100%' style={styles.background}>
      <View>
        <Text style={styles.title}>Meu App!</Text>
        <Image
          source={profileImage}
          style={styles.profileImage}
          />

        <View style={styles.main}>
        <Text style={styles.heading2}>Dados pessoais:</Text>

        <Text style={styles.content}>{nome}</Text>

        <Text style={styles.heading2}>
          Formação:
        </Text>

        <Text style={styles.content}>
          Análise e Desenvolvimento de Sistemas
        </Text>

        <Text style={styles.heading2}>
          Github:
        </Text>

        <Text style={styles.content}>
        https://github.com/VinoLemos
        </Text>

        
        <Text style={styles.heading2}>
          Linkedin: 
        </Text>

        <Text style={styles.content}>
        https://linkedin.com/in/vinolemos
        </Text>
        </View>
      </View>
        </ImageBackground>
    )    
  }
}

export default App;
