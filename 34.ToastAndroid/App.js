/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *@format
 * @flow
 */

import React, { Component } from 'react';
import {StyleSheet, Text, View, ToastAndroid, Button} from 'react-native';

export default class App extends Component{
  toastDuration = () => {
    ToastAndroid.show("Mensagem com: Duration!", ToastAndroid.SHORT);
  }

  toastDurationGravity = () => {
    ToastAndroid.showWithGravity(
      "Mensagem com: Duration e Gravity",
      ToastAndroid.SHORT,
      ToastAndroid.CENTER
    );
  }

  toastDurationGravityOffset = () => {
    ToastAndroid.showWithGravityAndOffset(
      "Mensagem com: Duration, Gravity and Offset",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      // esquerda para a direita
      25,
      // baixo para cima
      50
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{margin: 20}}>
          <Button
            title="Toast 1"
            onPress={this.toastDuration}
          />
        </View >
        
        <View style={{margin: 20}}>
          <Button
            title="Toast 2"
            onPress={this.toastDurationGravity}
          />
        </View>

        <View style={{margin: 20}}>
          <Button
            title="Toast 3"
            onPress={this.toastDurationGravityOffset}
          />
        </View>

      </View>
    );
  }   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})