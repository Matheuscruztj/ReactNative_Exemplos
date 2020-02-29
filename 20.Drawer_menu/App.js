/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * 
 */

import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import {HomeScreen, HomeScreen2,ProfileScreen,SettingsScreen} from './src/screens';
import { createAppContainer } from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

class NavigationDrawerStructure extends Component{
  toggleDrawer = () => {
    this.props.navigationProps.toggleDrawer();
  };
  render(){
    return (
      // como ele vai ficar com uma linha na horizontal(barra de menu), por isso o flexDirection
      <View style={{flexDirection:'row'}}>
        {/* chamada pelo usuario como um evento assincrono, assim precisando colocar o bind para*/}
        {/* que seja reconhecido como a propriedade definida na variavel acima  */}
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
            source={require('./src/assets/imagem_menu_mobile.png')}
            style={{width: 25, height: 25, marginLeft: 5}}
          />
        </TouchableOpacity>
      </View>
    )
  }
}
const HomeStackNavigator = createStackNavigator({
  Home:{
    screen: HomeScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Tela inicial',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    }),
  },
  Home2:{
    screen: HomeScreen2,
  },
})

const ProfileStackNavigator = createStackNavigator({
  Home:{
    screen: ProfileScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Tela de Perfil',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    }),
  }
})

const SettingsStackNavigator = createStackNavigator({
  Home:{
    screen: SettingsScreen,
    navigationOptions: ({navigation}) => ({
      title: 'Tela de configuracao',
      headerLeft: () => <NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor: 'blue',
      },
      headerTintColor: 'white',
    }),
  }
})

const MyDrawerNavigator = createDrawerNavigator(
  {
    HomeMenu :{
      screen: HomeStackNavigator,
      navigationOptions:{
        drawerLabel: 'Home',
        drawerIcon: ({focused, tintColor}) => (
            <Image 
                source={require('./src/assets/home.png')}
                style={{width: 50, height: 50}}
            />
        ),
      }
    },
    HomeProfile:{
      screen:ProfileStackNavigator,
      navigationOptions:{
        drawerLabel: 'Profile',
        drawerIcon: ({focused, tintColor}) => (
            <Image 
                source={require('./src/assets/profile.jpg')}
                style={{width: 50, height: 50}}
            />
        )
      }
    },
    HomeSettings:{
      screen: SettingsStackNavigator,
      navigationOptions:{
        drawerLabel: 'Settings',
        drawerIcon: ({focused, tintColor}) => (
            <Image 
                source={require('./src/assets/settings.png')}
                style={{width: 50, height: 50}}
            />
        )
      }
    }
  },
  {
    contentOptions:{
      activeTintColor: 'red',
      labelStyle:{
        fontSize: 20,
      }
    }
  }
)

export default createAppContainer(MyDrawerNavigator);