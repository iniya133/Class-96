import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert,Modal,ScrollView,KeyboardAvoidingView,Image} from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WelcomeScreen extends Component{
    constructor(){
        super()
        this.state={
            email:'',
            password:'',
            visible:false,
            firstName:'',
            lastName:'',
            contact:'',
            address:'',
            confirmPassword:''
        }
    }
    login=(email,password)=>{
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then(()=>{
            this.props.navigation.navigate('CompanyDetails')
        })
        .catch((error)=>{
            var errorCode = error.errorCode
            var errorMessage = error.errorMessage
            return Alert.alert(errorMessage)
        })
    }
    signup=(email,password,confirmPassword)=>{
        if(password!==confirmPassword){
            return Alert.alert('password doesnot match\n check your password')
        }
        else{
            firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(()=>{
                db.collection('users').add({
                    first_name:this.state.firstName,
                    last_name:this.state.lastName,
                    contact:this.state.contact,
                    address:this.state.address,
                    email_id:this.state.email
                })
                return Alert.alert('user added successfully',
                '',
                [
                    {text:'OK',onPress:()=>this.setState({visible:false})}
                ])
            })
            .catch((error)=>{
                var errorCode = error.errorCode
                var errorMessage = error.errorMessage
                return Alert.alert(errorMessage)
            })
        }
    }
    showModal=()=>{
        return(
            <Modal animationType = 'fade'
            transparent = {true}
            visible = {this.state.visible}>
                <View style = {styles.modalContainer}>
                    <ScrollView style = {{width:'100%'}}>
                        <KeyboardAvoidingView style = {styles.keyboard}>
                            <Text style = {styles.modalTitle}>sign up</Text>
                            <TextInput style = {styles.loginbox}
                            placeholder  = {'first name'}
                            maxLength = {8}
                            onChangeText= {(text)=>{
                                this.setState({
                                    firstName:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'last name'}
                            maxLength = {8}
                            onChangeText= {(text)=>{
                                this.setState({
                                    lastName:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'contact Number'}
                            maxLength = {8}
                            keyboardType = {'numeric'}
                            onChangeText= {(text)=>{
                                this.setState({
                                    contact:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'address'}
                            maxLength = {8}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    address:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'emailId'}
                            keyboardType = {'email-address'}
                            onChangeText= {(text)=>{
                                this.setState({
                                    email:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'password'}
                            secureTextEntry = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    password:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'confirm Password'}
                            secureTextEntry={true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    confirmPassword:text
                                })
                            }}/>

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity style= {styles.registerButton}
                                onPress={()=>{
                                    this.signup(this.state.email,this.state.password,this.state.confirmPassword)
                                }}>
                                    <Text style = {styles.registerbuttonText}>Sign Up</Text>
                                </TouchableOpacity>
                            </View>

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity style= {styles.registerButton}
                                onPress={()=>{
                                    this.setState({
                                        visible:false
                                    })
                                }}>
                                    <Text style = {styles.registerbuttonText}>cancel</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </Modal>
        )
    }
    
    render(){
        return(
            <View style = {styles.container}>
                <View>
                    <Text style = {styles.title}>Job For You</Text>
                    <Image style = {{width:150,height:150,alignSelf:'center'}} source={require('../assets/8f6e09e823feb3f2a12e7bcaf2c5366d-job-magnifier-icon-by-vexels.png')}/>
                </View>
                <View>
                    {this.showModal()}
                </View>
                <View style= {styles.subcontainer}>
                    <TextInput style = {styles.loginbox}
                    placeholder = {'enter email'}
                    keyboardType = {'email-address'}
                    onChangeText = {(text)=>{
                        this.setState({
                            email:text
                        })
                    }}/>

                    <TextInput style = {styles.loginbox}
                    placeholder = {'password'}
                    secureTextEntry = {true}
                    onChangeText = {(text)=>{
                        this.setState({
                            password:text
                        })
                    }}/>

                    <TouchableOpacity style = {styles.button} 
                    onPress = {()=>{
                        this.login(this.state.email,this.state.password)
                    }}>
                        <Text style = {styles.buttontext}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {[styles.button,{marginTop:20,marginBottom:20}]} 
                    onPress = {()=>{
                        this.setState({
                            visible:true
                        })
                    }}>
                        <Text style = {styles.buttontext}>Signup</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
        fontSize:50,
        fontWeight:'bold',
        padding:10,
        alignSelf:"center",
        marginTop:50
    },
    loginbox:{
        width:'80%',
        height:50,
        borderRadius:10,
        borderColor:'green',
        margin:10,
        padding:10,
        borderBottomWidth: 1.5, 
    },
    button:{
        width:'80%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
        backgroundColor:'purple',
        padding:15
    },
    buttontext:{
        color:'white',
        fontWeight:'bold',
        fontSize:20
    },
    subcontainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        backgroundColor:'white'
    },
    keyboard:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalTitle:{
        justifyContent:'center',
        alignSelf:'center',
        color:'black',
        fontSize:20,
        fontWeight:'bold'
    },
    modalBackButton:{
        flex:1,
        margin:20,
        padding:20
    },
    registerButton:{
        width:'100%',
        height:50,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10
    },
    registerbuttonText:{
        color:'black',
        fontWeight:'bold',
        fontSize:20
    }
})