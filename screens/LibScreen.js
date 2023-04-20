import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import db from '../localdb';
import PhonicSoundButton from '../components/PhonicSoundButton'

import AppHeader from '../components/AppHeader';

export default class LibScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      text: '',
      chunks: [],
      phonicSounds: [],
    };
  }

  render(){
    return(
      <SafeAreaProvider>
        <View>
          
          <AppHeader/>

          <TextInput
            style={styles.inputBox}
            onChangeText={(text) => {
              this.setState({ text: text });
            }}
            value={this.state.text}
          />
          <TouchableOpacity
            style={styles.goButton}
            onPress={() => {
              this.setState({ chunks: db[this.state.text].chunks });
              this.setState({ phonicSounds: db[this.state.text].phones })
            }}>
            <Text style={styles.buttonText}>IR</Text>
          </TouchableOpacity>
          <View>
            {this.state.chunks.map((item, index) => {
              return (
                <PhonicSoundButton
                  wordChunk={this.state.chunks[index]}
                  soundChunk={this.state.phonicSounds[index]}
                />
              );
            })}
          </View>
          <TouchableOpacity style={styles.buttons} onPress={() => this.props.navigation.navigate('HomeScreen')}>
          <Text style={{fontSize:14, color:'#000'}}> Voltar </Text>
        </TouchableOpacity>
        </View>
      </SafeAreaProvider>
    );
  }
}

const styles = StyleSheet.create({
  buttons:{
    backgroundColor: '#FFF',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    margin: 10,
    width: 80,
    height: 30,
  },
  inputBox:{
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  goButton: {
    width: '50%',
    height: 55,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
});
