import React from 'react';
import {View, Text, Image} from 'react-native';

export default class ProfileScreen extends React.Component{
    // propriedade que permite que edite o menu
    static navigationOptions = {
        drawerLabel: 'Profile',
        drawerIcon: ({focused, tintColor}) => (
            <Image 
                source={require('../assets/profile.jpg')}
                style={{width: 50, height: 50}}
            />
        )

    }
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
