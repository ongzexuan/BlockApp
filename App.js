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
import Logout from './components/Logout';
import Login from './components/Login';
import Signup from './components/Signup';

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
  },
  Logout: {     
    screen: Logout 
  }
})

const BlockApp = StackNavigator({
  Login: {
    screen: Login
  },
  Main: {     
    screen: MainMenu 
  },
  Signup: {
    screen: Signup
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

