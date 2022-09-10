import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable} from 'react-native';
 
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  
  increase(){
    this.setState({
      count: this.state.count + 1
    });
  }
  decrease(){
    this.setState({
      count: this.state.count - 1
    });
  }
 
  render(){
    return(
      <View style={styles.container}>

      <Text style={styles.title}>Contador de Pessoas</Text>
      
      <Text style={styles.counter}>{this.state.count}</Text>

      <Pressable style={styles.increaseButton} onPress={() => this.increase()}>
        <Text style={styles.textButton}>+</Text>
      </Pressable>

      <Pressable style={styles.decreaseButton} onPress={() => this.decrease()}>
        <Text style={styles.textButton}>-</Text>
      </Pressable>
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },
  title:{
    fontSize: 50,
    textAlign: 'center',
    color: 'gray',
    fontFamily: 'Cambria',
  },
  counter:{
    alignSelf: 'center',
    fontSize: 80,
    margin: 50
  },
  increaseButton:{
    width: 200,
    height: 50,
    margin: 50,
    backgroundColor: 'green'
  },
  decreaseButton:{
    width: 200,
    height: 50,
    margin: 50,
    backgroundColor: 'red'
  },
  textButton:{
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 24,
  }
})
 
export default App;
