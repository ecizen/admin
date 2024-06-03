import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native'
import React,{useState} from 'react'
import ordeIcon from '../../Image/Orderfood.png'
import Customer from '../component/customer'

export default function Dashboard() {
  
    
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title} className="text-green-600">Orders</Text>
        <Text style={styles.subtitle}>Click to see the details</Text>
      </View>
      <View style={styles.action}>
        <TouchableOpacity style={styles.orderBtn}>
            <Image source={ordeIcon} style={{width: 30, height: 30}}/>
            <Text style={{fontSize: 20, color: 'black', fontWeight: '700'}}>Incoming Order</Text>
        </TouchableOpacity>
        <View style={{position: 'relative', justifyContent: 'center'}}>
           <TextInput style={styles.search} placeholder='search here' placeholderTextColor={'gray'}></TextInput>
           <Image source={require('../../Image/search.png')} style={{width: 24, height: 24, position: 'absolute', marginLeft: 10}}/>
        </View>
      </View>
        <View style={{marginTop: 20}}>
          <Customer/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#FDFDFD'
  },
  content:{
    marginTop: 0
  },
  title:{
    fontSize: 30,
    fontWeight: '500',
  
  },
  subtitle:{
    fontSize: 20,
    fontWeight: '',
    color: 'gray',
    marginTop: 5
  },
  action:{
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  orderBtn:{
    
    height: 60,
    backgroundColor: '#D1EAFF',
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal:20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 1,
    shadowOffset:5
  },
  search:{
    width: 250,
    height: 60,
    paddingLeft: 60,
    fontSize: 16,
    color: 'white',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,
borderWidth: 1,
borderColor: 'gray',


elevation: 1,
    shadowOffset:5,
    backgroundColor: 'white',
    borderRadius: 10,
    color: 'black',
    fontWeight: '700',
  }
  
})

