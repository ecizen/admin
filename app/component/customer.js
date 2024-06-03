import { Text, View, StyleSheet, Modal, Alert, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router'
import gambar from '../../Image/Fried.png'

export default function Customer() {
    const [modalVisible, setModalVisible] = useState(false);
    const [count, setCount] = useState(0);
    

    const incrementCount = () => {
        setCount(count + 1);
        console.log(count)
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
        {
            id: '3',
            id_pesanan: '3493893',
            nama: 'Nomer 8',
            atasNama: 'Ronaldo botak',
            tanggal: '12 Mei 2024',
        },
        {
            id: '4',
            id_pesanan: '284828',
            nama: 'Nomer 1',
            atasNama: 'no name',
            tanggal: '12 Mei 2024',
        },
    ];
   const nextProgres =() =>{
     setModalVisible(false); //
     router.push('/Cashier/incoming')
   }

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
            </TouchableOpacity>         
        </View>
    );
    
    return (
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
            
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ width: 800, backgroundColor: 'white', height: 670, paddingHorizontal: 30, paddingVertical: 30 }}>
                            <Text style={{ fontSize: 45, fontWeight: 'bold' }}>Order Detail</Text>
                            <Text style={{ fontSize: 32, marginTop: 10 }}>Table number: 10</Text>
                            <View style={{alignItems: 'flex-end'}}>
                                <View style={{flexDirection: 'row', gap: 20, paddingHorizontal: 10,paddingVertical: 10, backgroundColor:'#0089FF', width: 220, alignItems: 'center', borderRadius: 10, justifyContent: 'center', marginTop: 0}}>
                                    <Image source={require('../../Image/Dining.png')} style={{width: 30, height: 30}}/>
                                    <Text style={{color: 'white', fontSize: 35, fontWeight: 'bold'}}>Dine in</Text>
                                </View>
                            </View>
                            <View style={{marginTop: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={styles.gambarProduk}>
                                    <Image source={gambar} style={{width: 60, height: 60}}/>
                                    <Text style={styles.namaProduk}>Fried Chicken</Text>
                                </View>
                                <View style={{flexDirection: 'row', gap: 20}}>
                                    <TouchableOpacity onPress={incrementCount} style={{width: 50, height: 50,  borderRadius: 100, elevation: 1, backgroundColor: 'blue', justifyContent:'center', alignItems: 'center'}}><Text style={{fontSize: 28, fontWeight:'bold', color: 'white'}}>+</Text></TouchableOpacity>
                                        <Text style={{fontSize: 32, fontWeight:'bold', color: 'black'}}>{count}</Text>
                                    <TouchableOpacity onPress={decrementCount} style={{width: 50, height: 50,  borderRadius: 100, elevation: 1, backgroundColor: 'red', justifyContent:'center', alignItems: 'center'}}><Text style={{fontSize: 28, fontWeight:'bold', color: 'white'}}>-</Text></TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.price}>Rp. 20.000</Text>
                                </View>
                            </View>
                            <View style={{marginTop: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                                <View style={styles.gambarProduk}>
                                    <Image source={gambar} style={{width: 60, height: 60}}/>
                                    <Text style={styles.namaProduk}>Fried Chicken</Text>
                                </View>
                                <View style={{flexDirection: 'row', gap: 20}}>
                                    <TouchableOpacity onPress={incrementCount} style={styles.btnjumlah}><Text style={{fontSize: 28, fontWeight:'bold', color: 'white'}}>+</Text></TouchableOpacity>
                                        <Text style={{fontSize: 32, fontWeight:'bold', color: 'black'}}>{count}</Text>
                                    <TouchableOpacity onPress={decrementCount} style={styles.btnjumlah}><Text style={{fontSize: 28, fontWeight:'bold', color: 'white'}}>-</Text></TouchableOpacity>
                                </View>
                                <View>
                                    <Text style={styles.price}>Rp. 20.000</Text>
                                </View>
                            </View>
                            <View style={{position: 'absolute', bottom: 20, right: 30,}}>
                                <TouchableOpacity onPress={nextProgres} style={{width: 170, height: 60, backgroundColor: '#67C587', justifyContent: 'center', alignItems: 'center', }}><Text style={{fontSize: 24,fontWeight: 'bold', color: 'white'}}>Done</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 90,
        backgroundColor: 'white',
        shadowColor: "#000",
        borderBottomWidth: 1,
        borderColor: '#D9D5D5',
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
});
