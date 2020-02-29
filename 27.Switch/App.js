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
  Switch
} from 'react-native';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state={switchValue: false};
  }

  toggleSwitch = (value) => {
    this.setState({switchValue: value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.switchValue?'Switch LIGADO':'Switch DESLIGADO'}</Text>

        <Switch
          value={this.state.switchValue}
          onValueChange={this.toggleSwitch}
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