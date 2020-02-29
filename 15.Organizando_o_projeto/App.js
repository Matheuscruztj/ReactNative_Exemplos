/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 * Renderiza somente quando 'move' a página, assim ficando mais leve em desempenho e visualmente
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { HomeScreen, ProfileScreen, DetailsScreen } from './src/screens';

// Organização das pastas do projeto
// /src
//      /assets
//      /components
//      /screens
//      /styles

// criei o navegador
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions:{
        headerShown: false,
      },
    },
    Profile:{
      screen: ProfileScreen
    },
    Details:{
      screen: DetailsScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);
// encapsular o navegador no container principal
const AppContainer = createAppContainer (AppNavigator);

export default class App extends Component{
  render(){
    return <AppContainer/>;
  }
}
