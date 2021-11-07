import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import CompanyProfileScreen from '../screens/CompanyProfileScreen';
import WorkerProfileScreen from '../screens/WorkerProfileScreen';


export const AppTabNavigator = createBottomTabNavigator({
  CompanyDetails : {
    screen:CompanyProfileScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/company.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Companies",
    }
  },
  WorkerDetails: {
    screen: WorkerProfileScreen,
    navigationOptions :{
      tabBarIcon : <Image source={require("../assets/unnamed.png")} style={{width:20, height:20}}/>,
      tabBarLabel : "Workers",
    }
  }
});
