/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *@format
 * @flow
 */


import React, { Component } from 'react';
import {StyleSheet, Text, View, Linking} from 'react-native';
import Slider from '@react-native-community/slider';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state ={
      sliderValue: 15,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 25}}>
          Temperatura: {this.state.sliderValue}°C
        </Text>

        <Slider
          maximumValue={40}
          minimumValue={0}
          step={5}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="black"
          value={this.state.sliderValue}
          onValueChange={ value => this.setState({sliderValue: value}) }
          style={{width: 300}}
        />
      </View>
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
})