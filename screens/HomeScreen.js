import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Button} from 'react-native';
import {Audio} from 'expo-av';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {

  music = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      { shouldPlay: true }
    );
  };

  alerta(){
    alert("pelo visto você não sabe o que é um virus")
  }

  render(){
    return(
      <View>
        <AppHeader/>

        <View style={styles.buttonsContainer}>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('CopaScreen')}>
            <Text> Previsão </Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('GameScreen')}>
            <Text> Jogos Aleatórios mas bons </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons}onPress={this.alerta}>
            <Text> DOWLOAD RAPIDO E FACIL<br/> SEM VIRUS 100% CONFIAVEL</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={this.music}>
            <Text>Buzinar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('TextScreen')}>
            <Text> Escreva um feedback </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('LibScreen')}>
            <Text> Soletrar </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('MyScreen')}>
            <Text> Sobre Mim </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('CounterScreen')}>
            <Text> Me Avalie </Text>
          </TouchableOpacity>

        </View>

        <Text style={{color:'#686868',textAlign:'center', margin:20, fontStyle:'italic'}}> Developed by Kenri. </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer:{
    alignSelf: 'center',
    marginTop: 20
  },
  buttons:{
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 10,
    width: 200,
    height: 50
  }
});