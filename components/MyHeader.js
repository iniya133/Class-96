import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import {Header,Icon,Badge} from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

export default class MyHeader extends Component{
    render(){
        return(
          <Header
            leftComponent={<Icon name='bars' type='font-awesome' color='white'  onPress={() => this.props.navigation.toggleDrawer()}/>}
            centerComponent={{ text: this.props.title, style: { color: 'white', fontSize:20,fontWeight:"bold", } }}
            backgroundColor = "purple"
          />
        )
      }
}