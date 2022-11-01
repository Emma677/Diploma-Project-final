import { View, Text,StyleSheet,Image, ScrollView, FlatList, Dimensions, ImageBackground,Pressable,SafeAreaView,StatusBar } from 'react-native'
import React, { useState } from 'react'
import firebase from 'firebase';
import { useEffect } from 'react';
import events from './events';
import { TouchableOpacity } from 'react-native';
const {width} = Dimensions.get('window');





const DashboardScreen = ({navigation}) => {
  const [loggedInUser, setLoggedInUser] = useState({
    id:'',
    email:'',
    name:'',

  })
  useEffect(()=>{
    var userUID = firebase.auth().currentUser.uid
  firebase.database().ref(`users/${userUID}`)
  .on('value',(user) => {
    setLoggedInUser({
      name:user.val().name,
      email:user.val().email
    })
    console.log(user.val())
  })
  },[])



  const Card = ({events}) => {
    return (
  
    <TouchableOpacity activeOpacity={0.8} onPress={()=>navigation.navigate('DetailScreen',events)}>
      <ImageBackground style={style.cardImage} source={events.image} >
          <Text style={{ color: "#f5a623", fontSize:20, fontWeight: 'bold'}}>{events.name}</Text>
    </ImageBackground>
    </TouchableOpacity>
    )
    //   <Pressable onPress={() => navigation.navigate('DetailScreen',events)}>
    //      <View style={style.card}>
    //     {/* <View style={{alignItems: 'center'}}>
    //       <Image source={events.image} style={style.cardImage}/>
    //     </View> */}
    
    //    <ImageBackground style={{height: 200, width: '100%', borderRadius: 10}}  source={events.image}>

    //    </ImageBackground>
    //    <Text style={style.cardName}>{events.name}</Text>
    //   </View>
    //   </Pressable>
     
    // )
     
    
  };

 
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor: '#04555c'}}>
      <StatusBar translucent={false} backgroundColor={'#FFF'}/>

      <View style={{backgroundColor:'#ffd302'}}>
       <Text style={{fontSize:18, fontWeight:"bold"}}>WELCOME, {loggedInUser.name}</Text>
      </View>
      
      <View style={{backgroundColor:'#ffd302'}}>
        <Text style={{fontSize:35, fontWeight:"bold"}}> Find your event </Text>
      </View>

      <ScrollView>
        <FlatList
       showsHorizontalScrollIndicator ={false}
        contentContainerStyle={{paddingRight:20, paddingBottom:20,paddingTop:20}}
        horizontal
        data ={events}
        renderItem={({item}) => <Card events={item} />}
      
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen;

const style = StyleSheet.create({
  card:{
    height: 250,
    width: width / 3.5,
    elevation: 10,
    margin:20,
    backgroundColor: '#fff',
    borderRadius: 20, 
   
  },

  cardImage:{
    height: 220, 
    width: width / 2, 
    marginRight: 20,
    padding: 10,
    overflow:'hidden', 
    borderRadius:10
  },
  cardName:{
    marginTop:10,
    fontSize:20,
    color: '#000',
    fontWeight:'bold'
  }
})