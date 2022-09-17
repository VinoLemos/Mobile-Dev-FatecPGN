import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      altura: 0.00,
      peso: 0.00,
      imc: ''
    };
    this.calcularImc = this.calcularImc.bind(this);
  }

  calcularImc(){
    let resultado = this.peso / (this.altura * this.altura) ;
    if (resultado >18.5 && resultado <24.9){
        this.setState({imc: "Peso normal"})
    }
    else if (resultado >= 25.0 && resultado <=29.9){
        this.setState({imc: "Sobrepeso"})
    }
    else if (resultado >=30.0)
    {
      this.setState({imc: "Obesidade"})
    }
    else (resultado >40.0)
    {
      this.setState({imc: "Obesidade Grave"})
    }
  }


  render() {
    const scale = { uri: 'https://c.tenor.com/OO7zyJWt_tsAAAAM/donut-weighing-scale.gif' };
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Cálculo do IMC</Text>

        <Image source={scale} style={styles.scale} />

        <TextInput placeholder="Peso" 
                  style={styles.textInput}
                  onChangeText={(p)=>this.setState({peso: p})}
                  />

        <TextInput placeholder="Altura" 
                  style={styles.textInput}
                  onChangeText={(a)=>this.setState({altura: a})}
                  />

        <Pressable style={styles.button}>
            <Text style={styles.buttonText}
                  onPress={this.calcularImc}
                  >Verificar</Text>
        </Pressable>

        <Text>{this.state.imc}</Text>

      </View>
    )
  }
}

export default App;
