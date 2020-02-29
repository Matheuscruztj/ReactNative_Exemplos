import React from 'react';
import {View, Text, Image} from 'react-native';

export default class SettingsScreen extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{margin: 80, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 300}} source={require('../assets/settings.png')} />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Tela Inicial</Text>
                </View>
            </View>
        );
    }
}
