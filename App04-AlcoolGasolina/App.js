import React, { Component } from 'react';
import { Text, View, Image, TextInput, Pressable } from 'react-native';
import { styles } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alcool: 0.00,
      gasolina: 0.00,
      resultado: ''
    };
    this.combustivel = this.combustivel.bind(this);
  }

  combustivel() {
    let preco = this.state.alcool / this.state.gasolina

    if (preco <= 0.7)
      this.setState({ resultado: "Abastecer com álcool é mais vantajoso" })
    else
      this.setState({resultado: "Abastecer com gasolina é mais vantajoso" })
  }

  render() {
    const gasPump = { uri: 'https://c.tenor.com/rob0fK6GFfIAAAAd/free-gas-gasoline.gif' };
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Álcool ou Gasolina</Text>

        <Image source={gasPump} 
               style={styles.gasPump} />

        <TextInput 
                  style={styles.textInput} 
                  placeholder="Preço do Álcool"
                  onChangeText={(a)=>this.setState({alcool: a})} />
        <TextInput 
                  style={styles.textInput} 
                  placeholder="Preço da Gasolina"
                  onChangeText={(g)=>this.setState({gasolina: g})} />

        <Pressable style={styles.button}>
                  <Text style={styles.textButton} onPress={this.combustivel}>Verificar</Text>
        </Pressable>

        <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    )
  }
}

export default App;