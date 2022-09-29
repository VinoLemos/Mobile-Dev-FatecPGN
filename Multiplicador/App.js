import React, { Component } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { TextInput } from 'react-native-web';
import { styles } from './styles';
 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      resultado: ''
    };

    this.multiplica = this.multiplica.bind(this);

  }
  
  multiplica(){
    let resultado = this.state.n1 * this.state.n2;
    this.setState({resultado: resultado});
  }
 
  render(){

    let img = 'https://media.baamboozle.com/uploads/images/79339/1618690661_31254_url.gif';

    return(
      <View style={styles.container}>

      <Text style={styles.titulo}>Multiplicador de números</Text>
      <Image
        source={{uri: img}}
        style={styles.img}
      />
      
      <TextInput
        style={styles.entrada}
        placeholder="Digite o primeiro nº"
        onChangeText={(num1) => this.setState({n1: num1})}
        />

      <TextInput
        style={styles.entrada}
        placeholder="Digite o segundo nº"
        onChangeText={(num2) => this.setState({n2: num2})}
      />

      <Pressable style={styles.botao} onPress={this.multiplica}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>

      
      <Text style={styles.resultado}>{this.state.resultado}</Text>
      </View>
    );
  }
}
 
export default App;
