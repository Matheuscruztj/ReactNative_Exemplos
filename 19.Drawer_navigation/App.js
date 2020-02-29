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
import {HomeScreen,ProfileScreen,SettingsScreen} from './src/screens';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
  },{
    contentOptions:{
      activeTintColor: 'red',
      labelStyle:{
        fontSize: 20,
      }
    }
  }
)

export default createAppContainer(MyDrawerNavigator);