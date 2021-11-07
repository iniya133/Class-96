import React,{Component} from 'react';
import {Text,View,StyleSheet, TextInput, TouchableOpacity, Alert,Modal,ScrollView,KeyboardAvoidingView} from 'react-native';
import MyHeader from '../components/MyHeader';
import firebase from 'firebase';
import db from '../config';

export default class RequestScreen extends Component{
    constructor(){
        super()
        this.state={
            CompanyName:'',
            CompanyDetails:'',
            NeededAbilities:'',
            WorkerAbilities:'',
            WorkerName:'',
            WorkerDetails:'',
            isVisible:false,
            IsVisible:false,
            userName:firebase.auth().currentUser.email
        }
    }
    addRequestAsABusinessMan = (companyName,companyDetails) =>{
        var userName = this.state.userName
        db.collection("Requests_as_a_BusinessMan").add({
            "user_name":userName,
            "company_name":companyName,
            "company_details":companyDetails,
            "Needed_Abilities":this.state.NeededAbilities
        })
        this.setState({
            CompanyName:'',
            CompanyDetails:'',
            NeededAbilities:''
        })
        return Alert.alert(
            'Request Added Successfully',
            '',
            [
                {text:'OK', onPress:()=>{
                    this.setState({isVisible:false})
                }}
            ]
        );
    }

    addRequestAsAWorker = (workerName,workerDetails) =>{
        var userName = this.state.userName
        db.collection("Requests_as_a_Worker").add({
            "user_name":userName,
            "worker_name":workerName,
            "worker_details":workerDetails,
            "worker_Abilities":this.state.WorkerAbilities
        })
        this.setState({
            WorkerName:'',
            WorkerDetails:'',
            WorkerAbilities:''
        })
        return Alert.alert(
            'Request Added Successfully',
            '',
            [
                {text:'OK', onPress:()=>{
                    this.setState({IsVisible:false})
                }}
            ]
        );
    }

    showModal=()=>{
        return(
            <Modal animationType = 'fade'
            transparent = {true}
            visible = {this.state.isVisible}>
                <View style = {styles.modalContainer}>
                    <ScrollView style = {{width:'100%'}}>
                        <KeyboardAvoidingView style = {styles.keyboard}>
                            <Text style = {styles.modalTitle}>sign up</Text>
                            <TextInput style = {styles.loginbox}
                            placeholder  = {'Company Name'}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    CompanyName:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'Company Details'}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    CompanyDetails:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'abilities in worker need'}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    NeededAbilities:text
                                })
                            }}/>

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity style= {styles.registerButton}
                                onPress={()=>{
                                    this.addRequestAsABusinessMan(this.state.CompanyName,this.state.CompanyDetails)
                                }}>
                                    <Text style = {styles.registerbuttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity style= {styles.registerButton}
                                onPress={()=>{
                                    this.setState({
                                        isVisible:false
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

    ShowModal=()=>{
        return(
            <Modal animationType = 'fade'
            transparent = {true}
            visible = {this.state.IsVisible}>
                <View style = {styles.modalContainer}>
                    <ScrollView style = {{width:'100%'}}>
                        <KeyboardAvoidingView style = {styles.keyboard}>
                            <Text style = {styles.modalTitle}>sign up</Text>
                            <TextInput style = {styles.loginbox}
                            placeholder  = {'Your Name'}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    WorkerName:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'Your Details'}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    WorkerDetails:text
                                })
                            }}/>

                            <TextInput style = {styles.loginbox}
                            placeholder  = {'Your abilities'}
                            multiline = {true}
                            onChangeText= {(text)=>{
                                this.setState({
                                    WorkerAbilities:text
                                })
                            }}/>

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity style= {styles.registerButton}
                                onPress={()=>{
                                    this.addRequestAsAWorker(this.state.WorkerName,this.state.WorkerDetails)
                                }}>
                                    <Text style = {styles.registerbuttonText}>Submit</Text>
                                </TouchableOpacity>
                            </View>

                            <View style = {styles.modalBackButton}>
                                <TouchableOpacity style= {styles.registerButton}
                                onPress={()=>{
                                    this.setState({
                                        IsVisible:false
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
            <View style = {{flex:1}}>
                <View>
                    <MyHeader title = 'Request For All'/>
                </View>
                <View>{this.showModal()}</View>
                <View>{this.ShowModal()}</View>
                <View style = {{alignItems:'center',marginTop:200}}>
                    <TouchableOpacity style = {styles.button}
                    onPress={()=>{
                        this.setState({
                            isVisible:true
                        })
                    }}>
                        <Text style = {styles.buttontext}>Request as a Business Man</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style = {styles.button}
                    onPress={()=>{
                        this.setState({
                            IsVisible:true
                        })
                    }}>
                        <Text style = {styles.buttontext}>Request as a Worker</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        width:'80%',
        height:50,
        backgroundColor:'purple',
        borderWidth:1,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginTop:50,
        shadowOffset: { width: 0, height: 8, }, 
        shadowOpacity: 0.30, 
        shadowRadius: 10.32, 
        shadowColor: "#000",
    },
    buttontext:{
        fontSize:20,
        fontWeight:'bold',
        color:'white',
    },
    modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        margin:30,
        backgroundColor:'white',
        borderWidth:3
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
})