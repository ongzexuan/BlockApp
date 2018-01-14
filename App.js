/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { StackNavigator, DrawerNavigator, NavigationAction } from 'react-navigation';
//import HomeScreen from './components/HomeScreen';
import HomeScreen from './components/HomeScreen';
import TestComponent from './components/TestComponent';

/*class Main extends Component {
  render() {
    return(
      <MainMenu />
    );
  }
}*/

const MainMenu = DrawerNavigator({
  Home: {
    screen: HomeScreen
  },
  Test: {
    screen: TestComponent
  }
})

const BlockApp = StackNavigator({
  Main: {     
    screen: MainMenu 
  }
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
  });
export default BlockApp;

AppRegistry.registerComponent('BlockApp', () => BlockApp);

