import { StatusBar } from 'expo-status-bar';
import { Text, TextInput, View, Picker, Switch, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { Component } from 'react';
import { styles } from './styles.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      idade: 0,
      sexo: "Não definido",
      escolaridade: '',
      brasileiro: false,
      nacionalidade: ' ',
      limite: 50.00,
    }
    this.eBrasileiro = this.eBrasileiro.bind(this);
  }

  eBrasileiro() {
    if (this.state.brasileiro == true) {
      this.setState({ nacionalidade: "Brasileiro" })
    }
    else if (this.state.brasileiro == false) {
      this.setState({ nacionalidade: "Não Brasileiro" })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Abertura de Conta</Text>

        <View style={styles.form}>
          <Text>Nome: </Text>
          <TextInput placeholder="Nome"
            style={styles.textInput}
            onChangeText={(n) => this.setState({ nome: n })}
          />
        </View>
        <View style={styles.form}>
          <Text>Idade: </Text>
          <TextInput placeholder="Idade"
            style={styles.textInput}
            onChangeText={(i) => this.setState({ idade: i })}
          />
        </View>

        <View style={styles.form}>
          <Text style={{ justifyContent: 'left' }}>Sexo: </Text>
          <Picker
            selectedValue={this.state.sexo}
            onValueChange={(itemValue) => this.setState({ sexo: itemValue })}
          >
            <Picker.Item value={''} label='Não informado...' />
            <Picker.Item value={"Masculino"} label="Masculino" />
            <Picker.Item value={"Feminino"} label="Feminino" />
          </Picker>
        </View>

        <View style={styles.form}>
          <Text>Escolaridade: </Text>
          <Picker
            onValueChange={(itemValue) => this.setState({ escolaridade: itemValue })}
          >
            <Picker.Item value={''} label="Não informado..." />
            <Picker.Item value={"Ensino Fundamental"} label="Ensino Fundamental" />
            <Picker.Item value={"Ensino Médio"} label="Ensino Médio" />
            <Picker.Item value={"Ensino Superior"} label="Ensino Superior" />
          </Picker>
        </View>

        <View style={styles.form}>
          <Text>Limite: </Text>
          <Slider minimumValue={50.00}
            maximumValue={1500.00}
            style={{ width: 200, height: 40 }}
            onValueChange={(valorSelecionado) => this.setState({ limite: valorSelecionado })}
            value={this.state.limite}
            minimumTrackTintColor="#000000"
            maximumTrackTintColor="#FFFFFF"
          />
          <Text style={styles.sliderText}>
            R$ {this.state.limite.toFixed(0)}
          </Text>
        </View>

        <View style={styles.form}>
          <Text>Brasileiro? </Text>
          <Text>{this.state.brasileiro ? 'Sim' : 'Não'}</Text>
          <Switch
            style={styles.switch}
            value={this.state.brasileiro}
            onValueChange={(valor) => this.setState({ brasileiro: valor })}
          />
        </View>

        <Text>{this.state.nacionalidade}</Text>
        <Pressable style={styles.button}>          
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>
      </View>
    )
  }
}

export default App;
