import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView, FlatList } from 'react-native'
import React,{useState} from 'react'
import ordeIcon from '../../Image/Orderfood.png'
import OptionModal from '../component/optionmodal'
import PaymentOption from '../component/cashorqris'
import gambar from '../../Image/Fried.png';
import { router } from 'expo-router'

export default function incoming() {

  const [modalVisible, setModalVisible] = useState(false);
  const [PaymentModalVisible, setPaymentVisible] = useState(false);

  const [count, setCount] = useState(0);

  const incrementCount = () => {
      setCount(count + 1);
      console.log(count);
  };

  const decrementCount = () => {
      if (count > 0) {
          setCount(count - 1);
      }
  };

  const Data = [
      {
          id: '1',
          id_pesanan: '124727',
          nama: 'Nomer 7',
          atasNama: 'Vicencus JR',
          tanggal: '12 Mei 2024',
      },
      {
          id: '2',
          id_pesanan: '173872',
          nama: 'Nomer 10',
          atasNama: 'Jonathan Cristie',
          tanggal: '12 Mei 2024',
      },
  ];



  const Item = ({ id_pesanan, nama, atasNama, tanggal }) => (
    <View style={{ flexDirection: 'column' }}>
        <TouchableOpacity style={styles.card} onPress={() => setModalVisible(true)}>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.value}>{id_pesanan}</Text>
                <Text style={styles.field}>Id Pesanan</Text>
            </View>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.value}>{nama}</Text>
                <Text style={styles.field}>Nomer Meja</Text>
            </View>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.value}>{atasNama}</Text>
                <Text style={styles.field}>Atas Nama</Text>
            </View>
            <View style={{ flexDirection: 'column', gap: 5 }}>
                <Text style={styles.value}>{tanggal}</Text>
                <Text style={styles.field}>Tanggal Pesenan</Text>
            </View>
            <Text style={{fontStyle: 'italic'}}>Wait for payment</Text>
        </TouchableOpacity>         
    </View>
);
  
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
        <View style={{ flex: 1, marginTop: 20 }}>
            <FlatList
                data={Data}
                renderItem={({ item }) => (
                    <Item 
                        id_pesanan={item.id_pesanan} 
                        nama={item.nama}
                        atasNama={item.atasNama}
                        tanggal={item.tanggal}
                    />
                )}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
             <OptionModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                count={count}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
             
            />      
             {/* <OptionModal
                modalVisible={PaymentModalVisible}
                setPaymentOptionaVisible={setPaymentVisible}
                count={count}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                nextProgres={nextProgres}
            />       */}
        </View>
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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
},
modalView: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 30,
    width: '100%',
    position: 'absolute',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center'
},
gambarProduk: {
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
},
namaProduk:{
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black'
},
price:{
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black'
},
btnjumlah:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    width: 50, height: 50,  borderRadius: 100, elevation: 1, backgroundColor: 'blue', justifyContent:'center', alignItems: 'center'
},
card: {
  width: '100%',
  height: 90,
  backgroundColor: '#D9D9D9',
  shadowColor: "#000",
  borderBottomWidth: 1,
  borderColor: 'white',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingHorizontal: 20
},
listContent: {
  paddingBottom: 20,
},
modalView: {
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
 
  paddingHorizontal: 30,
  width: '100%',
  
  position: 'absolute',
  padding: 35,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOffset: {
      width: 0,
      height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  justifyContent: 'center'
},
value: {
  fontSize: 18,
  fontWeight: 'bold',
  width: 150,
},
field: {
  fontSize: 18,
  fontWeight: 'medium',
  color: 'gray'
},
gambarProduk: {
  flexDirection: 'row',
  gap: 16,
  alignItems: 'center',
},
namaProduk:{
  fontSize: 32,
  fontWeight: 'bold',
  color: 'black'
},
price:{
  fontSize: 32,
  fontWeight: 'bold',
  color: 'black'
},
btnjumlah:{
  shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 1,
  },
  shadowOpacity: 0.20,
  shadowRadius: 1.41,
  elevation: 2,
  width: 50, height: 50,  borderRadius: 100, elevation: 1, backgroundColor: 'blue', justifyContent:'center', alignItems: 'center'
}
  
})

