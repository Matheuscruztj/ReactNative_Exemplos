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
  TextInput,
  Text,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    height: 150,
    backgroundColor: 'white',
    fontSize: 42
  }
});

export default class App extends Component{
  render(){
    return(
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <Text style={{padding:10, fontSize: 42}}>
          Texto 1
        </Text>
        <Text style={{padding:10, fontSize: 42}}>
          Texto 2
        </Text>
        <Text style={{padding:10, fontSize: 42}}>
          Texto 3
        </Text>
        <Text style={{padding:10, fontSize: 42}}>
          Texto 4
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o texto aqui..."
        />
      </KeyboardAvoidingView>
    );
  }
}