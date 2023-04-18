import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class GameScreen extends Component {
  render(){
    return(
      <View>
        <AppHeader/>

        <View style={styles.container}>
          <Text style={{color:'#FFF', fontSize:15}}>Heave Ho: </Text>
          <Image style={{width:300, height:200}} source={require('../assets/h.jpg')}/>
          <br/>
          <Text style={{color:'#FFF', fontSize:15}}>Super Smash Bros Ultimate: </Text>
          <Image style={{width:300, height:200}} source={require('../assets/s.jpg')}/>
          <br/>
          <Text style={{color:'#FFF', fontSize:15}}>Katana Zero: </Text>
        </View>
        <Image style={{width:300, height:200}} source={require('../assets/download.jpg')}/>
        
        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{fontSize:14, color:'#000'}}> Voltar </Text>
        </TouchableOpacity>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container:{
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
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