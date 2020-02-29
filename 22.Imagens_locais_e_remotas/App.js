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
  Image,
  ImageBackground
} from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View>
        <ImageBackground source={{uri:'https://ibomdia.com/wp-content/uploads/2019/08/tamanho-de-wallpaper-para-celular.jpeg'}} style={{width:'100%', height:'100%'}}>
          <Image source={require('./src/assets/home.png')} style={{width:250, height: 250}}/>
          <Image source={{uri: 'https://www.oi.com.br/publicV2/oi-logo-purple-1.png'}} style={{width:290, height: 250}}/>
        </ImageBackground>
      </View>
    );
  }
}