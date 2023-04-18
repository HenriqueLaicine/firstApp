import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class CopaScreen extends Component {
  render(){
    return( 
      <View>
        <AppHeader/>

        <View style={styles.container}>


          <Text style={{color:'#FFF', fontSize:15}}> 
            O Argentina vai ganhar a <br/>
            Copa do Mundo de 2022. <br/><br/>
            Último Jogo: <br/>
            Argentina 3 x 3 França (Argentina vence os penaltis) 
          </Text>


          
        </View>

        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{fontSize:14, color:"black"}}> Voltar </Text>
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