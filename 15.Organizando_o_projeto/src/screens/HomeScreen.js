import React, { Component } from 'react';
import {
    View,
    Text,
    Button,
  } from 'react-native';

class HomeScreen extends Component{
    render(){
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: 50}}>Tela Inicial</Text>
          </View>
  
          <View style={{margin: 20}}>
            <Button title='Ir para Tela Perfil' onPress={ () => this.props.navigation.navigate('Profile',
             { name:'Marcos',age:28 }) } />
          </View>
          
        </View>
      );
    }
}

export default HomeScreen;