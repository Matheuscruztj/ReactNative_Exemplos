/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *@format
 * @flow
 */


import React, { Component } from 'react';
import {Image, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {date: ''};
  }
  selectDate = (date) => {
    this.setState({date: date});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <DatePicker
          style={{width: 200}}
          date={this.state.date}
          format="DD-MM-YYYY"
          minDate="10-01-2020"
          maxDate="31-08-2020"
          onDateChange={this.selectDate}
        />
        <Text style={{fontSize: 25}}>{this.state.date}</Text>
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