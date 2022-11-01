import React, { Component } from 'react'
import { View,TextInput,StyleSheet,Button} from 'react-native';
import ButtonComponent from '../Components/ButtonComponent'
import {SignUp} from '../Firebase/SignUp';
import { AddUser } from '../Firebase/AddUser'
import Firebase from '../Firebase/firebaseConfig'


 class SignUpScreen extends Component {
    state={
        name: "",
        email: "",
        password: "",
    }
SignUptoFirebase = () => {
    SignUp(this.state.email,this.state.password)
    .then((res)=>{
        console.log('res', res);
        this.props.navigation.navigate('Dashboard');
        var userUID = Firebase.auth().currentUser.uid;
        AddUser(this.state.name,this.state.email,'',userUID )
        .then(() =>{
            alert('success') 
        })
        .catch((error) =>{
            alert(error);
        })
    console.log(userUID);
}).catch((err)=>{
alert(err);
})
}
  render() {
    return (

        <View style={{flex:1, backgroundColor: "#000", justifyContent:'center', alignItems: 'center'}}>
            <View style = {[styles.mainContainer,{ backgroundColor: '#ccc'}]}>
                <TextInput style ={[styles.textInput, {fontSize:17}]}
                placeholder='Enter your name'
                onChangeText={(name) => this.setState({name})}
                /> 
            </View>

            <View style = {[styles.mainContainer,{ backgroundColor: '#ccc'}]}>
                <TextInput style ={[styles.textInput, {fontSize:17}]}
                    placeholder='email'
                    onChangeText={(email) => this.setState({email})}
                    /> 
            </View>

            <View style = {[styles.mainContainer,{ backgroundColor: '#ccc'}]}>
                <TextInput style ={[styles.textInput, {fontSize:17}]}
                placeholder='password'
                onChangeText={(password) => this.setState({password})}
                secureTextEntry
                /> 
            </View>

                <ButtonComponent title='Register' onPress={() =>{this.SignUptoFirebase() }}/>
                <ButtonComponent title='log In' 
            onPress={()=> this.props.navigation.navigate('logIn')}
                 />
        </View>
    )
  }
}

export default SignUpScreen;


const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        justifyContent: "center",
        borderRaduis : 10,
        height: 50,
        marginBottom: 10,
        width: '85%'
    },
    textInput:{
        paddingHorizontal:10,
        width: "90%",
        paddingVertical: 0,
        color: '#000',
        borderRaduis : 10,
    },
    
});


