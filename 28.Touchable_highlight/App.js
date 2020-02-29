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
  Button,
  Alert,
  Image,
  TouchableHighlight
} from 'react-native';

export default class App extends Component{
  warn = () => {
    Alert.alert('Você clicou!');
  }

  render() {
    return (
      <View style={styles.container}>

        <TouchableHighlight onPress={this.warn}>
          <Image 
            source={require('./src/assets/home.png')}
            style={{width:80, height: 80}}
          />
        </TouchableHighlight>
        
        <TouchableHighlight onPress={this.warn}>
          <Text style={{fontSize: 42}}>Developer Plus</Text>
        </TouchableHighlight>
        
        <Button 
          onPress={this.warn}
          title="Clique Aqui"
        />

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
});