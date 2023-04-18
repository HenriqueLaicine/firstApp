import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppHeader from '../components/AppHeader';

export default class TextScreen extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    };

  }
  
  alerta(){
    alert("Obrigado pelo comentário")
  }

  render() {
    return (
      <SafeAreaProvider>
        <View style={styles.container}>
          <AppHeader/>

          <Text style={styles.instruction}>Vai escreve aí</Text>

          <TextInput style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />

          <TouchableOpacity style={styles.goButton}onPress={this.alerta}>
            <Text style={styles.buttonText}> ENVIAR </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{fontSize:14, color:'#000'}}> Voltar </Text>
        </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d495e0',
  },
  inputBox: {
    marginTop: 20,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  instruction: {
    textAlign: 'center',
    fontSize: 40,
  },
  buttons:{
    backgroundColor: '#FFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 10,
    width: 80,
    height: 30
  }
});