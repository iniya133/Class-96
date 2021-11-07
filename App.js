import React,{Component} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import signUpLoginScreen from './screens/signUpLoginScreen';
import CompanyProfileScreen from './screens/CompanyProfileScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {AppTabNavigator} from './components/AppTabNavigator';
import {AppDrawerNavigator} from './components/AppDrawerNavigator';

export default class App extends Component{
    render(){
        return(
            <AppContainer/>
        )
    }
}
const switchNavigation = createSwitchNavigator({
    signUpLoginScreen:{screen:signUpLoginScreen},
    Drawer:{screen:AppDrawerNavigator},
    BottomTab:{screen:AppTabNavigator}
})
const AppContainer = createAppContainer(switchNavigation)