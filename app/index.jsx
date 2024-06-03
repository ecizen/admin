import { Text, View, Image,  StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

import Triangle2 from '../Image/Triangle.png'
import ScreenOrientation from 'expo-screen-orientation'
import { Link } from 'expo-router'

import { useNavigation } from 'expo-router'

 const onboarding = ({}) => {
  
  const navigation = useNavigation();
 
    return (
        <View style={styles.container}>
             <Image source={require('../Image/Hum.png')} style={{position: 'absolute', width: 200, height: 260, bottom: 0 }}></Image>
            <Image source={Triangle2} style={{width: 700, height: 850, position: 'absolute', right: 0, bottom: 0}}></Image>
            <View style={{marginTop: 120, marginLeft: 320}}>
                <View style={{maxWidth: 830}}>
                    <Text className='text-2xl text-green-400'>Hello Captain, Lets Mo<Text style={{color: 'white'}}>ve to</Text> the Next Screen </Text>
                    <Text style={{fontSize: 30, color: 'black' , marginTop: 10, fontWeight: '800'}}>Lets doing a great job together, Capt!</Text>
                </View>
                <View style={{marginTop: 150}}>
               
                    <Link href='/Cashier/Dashboard' style={{width: 280, height: 100,borderRadius: 8, flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center', shadowColor: "#000",shadowOffset: { width: 0,height: 1,},shadowOpacity: 0.18,shadowRadius: 1.00,elevation: 3, backgroundColor: 'white'}}>
                        <Text style={{fontSize: 40, fontWeight: 'bold'}}>Lets Go!</Text>
                        <Image source={require('../Image/arrow.png')} style={{width: 30, height: 30}}></Image> 
                    </Link>
          
                </View> 
            </View>  
        </View>
    )
  
}

export default onboarding;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingVertical: 20,
      paddingHorizontal: 40,
      position: 'relative',
      flexDirection: 'row' ,
    },
  });