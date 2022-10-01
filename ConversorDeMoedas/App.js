import React, { Component } from 'react';
import { View, Text, TextInput, Pressable} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles.js';

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      valor: 0.00,
      moeda1: '',
      moeda2: '',
      resultado: 0.00
    }

    this.converterMoeda = this.converterMoeda.bind(this);
  }

  mostrarResultado() {
    this.setState({
      resultado: `${this.state.resultado}`
    })
  }

  converterMoeda() {
    //Real > Dolar
    if(this.state.moeda1 == 'real' && this.state.moeda2 == 'dolar') {
      this.setState({resultado: this.state.valor / 5.41})
    }
    //Dolar > Real
    else if (this.state.moeda1 == 'dolar' && this.state.moeda2 == 'real') {
      this.setState({resultado: this.state.valor * 5.41})
    }
    //Euro > Dolar
    else if (this.state.moeda1 == 'euro' && this.state.moeda2 == 'dolar') {
      this.setState({resultado: this.state.valor / 0.98})
    }
    //Dolar > Euro
    else if (this.state.moeda1 == 'dolar' && this.state.moeda2 == 'euro') {
      this.setState({resultado: this.state.valor * 0.98})
    }
    //Real > Euro
    else if (this.state.moeda1 == 'real' && this.state.moeda2 == 'euro') {
      this.setState({resultado: this.state.valor / 5.31})
    }
    //Euro > Real
    else if (this.state.moeda1 == 'euro' && this.state.moeda2 == 'real') {
      this.setState({resultado: this.state.valor * 5.31})
    }
    
  }

  render(){
    return(
      <View>
        <Text style={styles.titulo}>Conversor de Moedas</Text>
        <Text style={styles.subtitulo}>Dólar, Real e Euro</Text>
        
        <View style={styles.form}>
          <Text style={styles.texto}>Valor: </Text>
          <TextInput 
            style={styles.input}
            onChangeText={(v) => this.setState({ valor: v })}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.texto}>De: </Text>
          <Picker
            selectedValue={this.state.moeda1}
            onValueChange={(itemValue) => this.setState({ moeda1: itemValue })}
          >
            <Picker.Item value={''} label="Escolha a moeda" />
            <Picker.Item value={'dolar'} label="Dolar" />
            <Picker.Item value={'real'} label="Real" />
            <Picker.Item value={'euro'} label="Euro" />
          </Picker>
        </View>

        <View style={styles.form}>
          <Text style={styles.texto}>Para: </Text>
          <Picker
            selectedValue={this.state.moeda2}
            onValueChange={(itemValue) => this.setState({ moeda2: itemValue })}
          >
            <Picker.Item value={''} label="Escolha a moeda" />
            <Picker.Item value={'dolar'} label="Dolar" />
            <Picker.Item value={'real'} label="Real" />
            <Picker.Item value={'euro'} label="Euro" />
          </Picker>
        </View>

        <Pressable>
          <Text 
            style={styles.botao}
            onPress={this.converterMoeda}
          > Converter</Text>
        </Pressable>

        <Text style={styles.resultado} >{this.state.resultado.toFixed(2)}</Text>

      </View>
    )
  }
}
 
export default App;