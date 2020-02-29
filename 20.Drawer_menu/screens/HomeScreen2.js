import React from 'react';
import {View, Text, Image, Button} from 'react-native';

export default class HomeScreen2 extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{margin: 80, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 300}} source={require('../assets/home.png')} />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Tela Inicial 2</Text>
                </View>
            </View>
        );
    }
}
