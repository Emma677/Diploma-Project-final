import { StyleSheet,SafeAreaView,Text,ScrollView, Linking } from 'react-native'
import React from 'react'
import { View } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons'
import { ImageBackground } from 'react-native'
import { Button } from 'react-native'
import { StatusBar } from 'react-native'




const DetailScreen = ({navigation,route}) => {
    const events = route.params;
    return <SafeAreaView style={{flex: 1, backgroundColor: '#ffd302' }}>
        <StatusBar translucent backgroundColor='rgba(0,0,0,0)'/>
      
      
<View style ={style.header}>
    
    <View  style ={style.headerBtn}>
        <Icon name='chevron-left'  size={25} onPress={navigation.goBack}/>
    </View>

    <Text style={{ fontWeight: 'bold', fontSize: 19}}>Details</Text>

    <View  style ={style.headerBtn}>
        <Icon name='dots-vertical'  size={25}/>
    </View>
     
</View>

  

<View style={{flex:1,alignItems:'center',}} showsVerticalScrollIndicator={false}>
        <ImageBackground 
            source={events.image} 
            resizeMode = 'contain'
            style={style.backgroundImage}> 
            <View style={style.imgtxt}>
                <Text
                style={{
                    width: '70%',
                    fontSize: 30,
                    fontWeight: 'bold',
                    color: '#000',
                    marginBottom: 20
                }}
                >{events.name}</Text>
            </View>
        </ImageBackground> 
</View> 

{/* 
<View style={{ marginTop:0}}>
    <Text style={{ fontWeight: 'bold', fontSize: 29}}>About the event</Text>
    <Text style={{marginTop:20,  fontWeight: 'bold', fontSize: 19}}>{events.details}</Text>
</View> */}

    <View style={{width: '60%', marginLeft: 220}}>
        <Button  title = 'Ticket' onPress={() => {Linking.openURL("http://ticketmiller.com")}}/>
    </View>  
    
</SafeAreaView> 
}


const style = StyleSheet.create({
    header:{
        paddingHorizontal:20,
        flexDirection: 'row',
        justifyContent:'space-between',
        marginTop: 60
      
    },
   
    headerBtn:{
        height: 50,
        width:50,
        backgroundColor: '#ffd302',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backgroundImage:{
        height:600,
        width: '80%',
       overflow:'hidden',
       marginBottom: 20,
    //   borderTopLeftRadius: 20,
    //   borderBottomLeftRadius:20,
      borderTopRightRadius: 20,
      borderBottomRightRadius: 20,
      ResizeMode: 'contain'
    },
    imgtxt:{
        padding: 20,
        flexDirection: 'row',
       

    }
})


export default DetailScreen;

