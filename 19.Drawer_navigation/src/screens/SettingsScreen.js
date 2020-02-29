import React from 'react';
import {View, Text, Image} from 'react-native';

export default class SettingsScreen extends React.Component{
    // propriedade que permite que edite o menu
    static navigationOptions = {
        drawerLabel: 'Settings',
        drawerIcon: ({focused, tintColor}) => (
            <Image 
                source={require('../assets/settings.png')}
                style={{width: 50, height: 50}}
            />
        )
    }
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
