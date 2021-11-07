import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CustomSideBarMenu  from './CustomSideBarMenu';
import RequestScreen from '../screens/RequestScreen';
import {Icon} from 'react-native-elements';
import SettingScreen from '../screens/SettingScreen';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon:<Icon name = "home" type = "fontawesome5"/>
    }
    },

  Request :{
    screen:RequestScreen
  }, 
  
  Setting:{
    screen:SettingScreen,
    navigationOptions:{
      drawerIcon:<Icon name = "cogs" type = "font-awesome"/>
    },
  },
},
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
