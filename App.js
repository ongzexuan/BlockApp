/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './components/HomeScreen';
import TestComponent from './components/TestComponent';

class Main extends Component {
  render() {
    return(
      <HomeScreen />
    );
  }
}

const BlockApp = StackNavigator({
  Home: {     
    screen: Main 
  }
},
//some strange hack to remove the headaer
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
export default BlockApp;

AppRegistry.registerComponent('BlockApp', () => BlockApp);

