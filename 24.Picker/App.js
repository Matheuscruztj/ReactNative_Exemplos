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
  KeyboardAvoidingView,
  Picker
} from 'react-native';

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  picker:{
    height: 20,
    width: 150,
    transform:[{ scaleX: 2.0 }, { scaleY: 2.0 }]
  }
});

export default class App extends Component{
  state = {language: 'Java'}

  render(){
    const language = this.state.language;
    return(
      <View style={styles.container}>

        <Picker
          selectedValue={this.state.language}
          style={styles.picker}
          onValueChange={
            (itemValue, itemIndex) => this.setState({language: itemValue})
          }
        >
          <Picker.Item label="Java" value="Java"/>
          <Picker.Item label="JavaScript" value="JS"/>
        </Picker>

        <Text style={{fontSize:42, padding:10}}>Linguagem: {language}</Text>

      </View>
    );
  }
}