import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image,} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class CounterScreen extends Component {
  constructor(){
    super();

    this.state={
      like: 0,
      dislike: 0
    }
  }

  likecount=()=>{
    this.setState({like:this.state.like + 1});
  }
  
  dislikecount=()=>{
    this.setState({dislike:this.state.dislike + 1});
  }

  render(){
    return(
      <View>
        <AppHeader />
        <Text style={{textAlign:'center', marginTop:40, color:'#FFF', fontSize:18}}> Avalie meu app 🙃
 </Text>
          
        <View style={styles.ratingContainer}>
          <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', padding:15}}>           
            <Text style={{color:'#FFF', fontSize:16}}> {this.state.like} </Text>
            <Text style={{color:'#FFF', fontSize:16}}> {this.state.dislike} </Text>
          </View>

          <TouchableOpacity onPress={this.likecount}>
            <Image style={{width:30, height:30, marginLeft:5}} source={require('../assets/like.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.dislikecount}>
            <Image style={{width:30, height:30, marginTop:-35, marginLeft:100}} source={require('../assets/dislike.png')}/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{fontSize:14, color:'#000'}}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ratingContainer:{
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 50
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