import React from 'react';
import {View, Text, Image, Button} from 'react-native';

export default class HomeScreen extends React.Component{
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
                        onPress={() => this.props.navigation.navigate('Home2')}
                        title="Tela Inicial 2"
                    />
                </View>
            </View>
        );
    }
}
