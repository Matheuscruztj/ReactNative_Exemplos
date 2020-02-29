import React from 'react';
import {View, Text, Image} from 'react-native';

export default class ProfileScreen extends React.Component{
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{margin: 80, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 300}} source={require('../assets/profile.jpg')} />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Tela de Perfil</Text>
                </View>
            </View>
        );
    }
}
