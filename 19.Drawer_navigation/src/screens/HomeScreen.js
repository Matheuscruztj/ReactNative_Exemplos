import React from 'react';
import {View, Text, Image, Button} from 'react-native';

export default class HomeScreen extends React.Component{
    // propriedade que permite que edite o menu
    static navigationOptions = {
        // nome que aparecera como titulo quando a tela for puxada
        drawerLabel: 'Home',
        drawerIcon: ({focused, tintColor}) => (
            <Image 
                source={require('../assets/home.png')}
                style={{width: 50, height: 50}}
            />
        ),
    }
    render(){
        return (
            <View style={{flex: 1, justifyContent: 'center'}}>
                <View style={{margin: 80, alignItems: 'center'}}>
                    <Image style={{width: 300, height: 300}} source={require('../assets/home.png')} />
                </View>

                <View style={{alignItems: 'center'}}>
                    <Text>Tela Inicial</Text>
                </View>

                <View style={{margin: 20}}>
                    <Button 
                        onPress={() => this.props.navigation.navigate('Profile')}
                        title="Profile"
                    />
                </View>
            </View>
        );
    }
}
