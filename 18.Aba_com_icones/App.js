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
import Ionicons from 'react-native-vector-icons/Ionicons';

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
      style:{
        backgroundColor: '#694fad',
      },
      showLabel: false,
    },
    defaultNavigationOptions: ({navigation}) => ({
      // focused é um booleano, onde verifica o Home(padrao), se esta ativo ou nao
      // horizontal é a orientação do dispositivo, onde retorna true se tiver deitado
      // recebe a cor dependendo da aba que estiver sendo carregada
      tabBarIcon: ({focused, horizontal, tintColor}) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;

        if(routeName === 'Home'){
          // para a versão de android, se fosse ios -> ios-home
          iconName = 'md-home';
        }else if(routeName === 'Profile'){
          iconName = 'md-person';
        }

        return <IconComponent name={iconName} size={50} color={tintColor}/>;
      }
    })
  }
);

export default createAppContainer (TabNavigator);
