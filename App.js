import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import CopaScreen from './screens/CopaScreen';
import GameScreen from './screens/GameScreen';
import MyScreen from './screens/MyScreen';
import CounterScreen from './screens/CounterScreen';
import TextScreen from './screens/TextScreen';
import LibScreen from './screens/LibScreen';

export default class App extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,

  CopaScreen: CopaScreen,
  GameScreen: GameScreen,
  TextScreen: TextScreen,
  LibScreen: LibScreen,
  MyScreen: MyScreen,
  CounterScreen: CounterScreen,
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#d495e0',
    padding: 8
  }
});