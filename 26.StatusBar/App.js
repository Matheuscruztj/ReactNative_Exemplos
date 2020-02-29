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
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';

export default class App extends Component{
  render() {
    const backgroundColor = '#772ea2';
    
    return (
      <View style={{ flex: 1 }}>

        <View style={[styles.statusBar, { backgroundColor }]}>
          <StatusBar backgroundColor={backgroundColor} barStyle="dark-content" />
        </View>

        <View style={styles.container}>
          <Text style={{fontSize: 30}}>Teste de Status Bar</Text>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusBar: {
    height: 30
  }
});