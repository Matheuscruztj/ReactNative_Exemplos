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
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text
          style={styles.text}
          onPress={
            () => {
              Linking.openURL('https://about.google/');
            }
          }
        >
          Visite o site
        </Text>

        <Text
          style={styles.text}
          onPress={
            () => {
              if(Platform.OS == 'ios'){
                Linking.openURL('http://maps.apple.com/?ll=-23.5864258,-46.684084');
              }else{
                Linking.openURL('geo:-23.5864258,-46.684084');
              }
            }
          }
        >
          Como chegar
        </Text>

        <Text
          style={styles.text}
          onPress={
            () => {
              Linking.openURL('http://api.whatsapp.com/send?phone=551199999999');
            }
          }
        >
          Enviar Mensagem
        </Text>

        <Text
          style={styles.text}
          onPress={
            () => {
              Linking.openURL('mailto:contato@google.com.br');
            }
          }
        >
          Enviar Email
        </Text>

      </View>
    );
  }
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text:{
    marginTop: 30,
    fontSize: 25,
  }
})