/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
} from 'react-native';
// navegação entre abas do canto de baixo
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeScreen, ProfileScreen } from './src/screens';

// variavél responsável pela pilha de navegação
const TabNavigator = createBottomTabNavigator(
  {
    // nome que a aba vai ter / classe da tela
    Home: HomeScreen,
    Profile: ProfileScreen,
  },
  {
    tabBarOptions:{
      //estilizacao da label da barra
      labelStyle:{
        fontSize: 35,
      },
      // cor para a aba ativa
      activeTintColor: 'tomato',
      // cor para a aba inativa
      inactiveTintColor: 'gray',
    }
  }
);

export default createAppContainer (TabNavigator);
