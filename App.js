import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increase() {
    this.setState({
      count: this.state.count + 1
    });
  }
  decrease() {
    if (this.state.count <= 0){
      this.state.count = 1
    }
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.title}>Contador de Pessoas</Text>

        <Text style={styles.counter}>{this.state.count}</Text>

        <View style={styles.buttons}>
          <Pressable style={styles.increaseButton} onPress={() => this.increase()}>
            <Text style={styles.textButton}>+</Text>
          </Pressable>

          <Pressable style={styles.decreaseButton} onPress={() => this.decrease()}>
            <Text style={styles.textButton}>-</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    marginTop: 80,
    color: 'orange',
    fontFamily: 'Cambria',
  },
  counter: {
    alignSelf: 'center',
    fontSize: 80,
    margin: 50,
    color: 'red',
    borderWidth: 2,
    padding: 25
  },
  increaseButton: {
    width: 200,
    height: 50,
    margin: 50,
    marginBottom: 10,
    backgroundColor: 'green'
  },
  decreaseButton: {
    width: 200,
    height: 50,
    margin: 50,
    marginTop: 10,
    backgroundColor: 'red'
  },
  textButton: {
    alignSelf: 'center',
    paddingTop: 5,
    fontSize: 24,
  },
  buttons: {
    alignSelf: 'center'
  }
})

export default App;
