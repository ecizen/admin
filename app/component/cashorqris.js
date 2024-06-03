// OrderModal.js
import React from 'react';
import { Text, View, StyleSheet, Modal, Alert, TouchableOpacity, Image } from 'react-native';
import gambar from '../../Image/Fried.png';

export default function OrderModal({ modalVisible, setModalVisible, incrementCount, decrementCount, count, nextProgres }) {
    return (
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
                            <View style={{flexDirection: 'row', gap: 20, paddingHorizontal: 10, paddingVertical: 10, backgroundColor:'#0089FF', width: 220, alignItems: 'center', borderRadius: 10, justifyContent: 'center', marginTop: 0}}>
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
                                    <Text style={{fontSize: 32, fontWeight:'bold', color: 'black'}}>2x</Text>
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
                        <View style={{position: 'absolute', bottom: 20, right: 30, flexDirection: 'row', gap: 20}}>
                            <TouchableOpacity onPress={nextProgres} style={{width: 170, height: 50, backgroundColor: '#1679AB', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}><Text style={{fontSize: 24,fontWeight: 'bold', color: 'white'}}>Split Bill</Text></TouchableOpacity>
                            <TouchableOpacity onPress={nextProgres} style={{width: 170, height: 50, backgroundColor: 'purple', justifyContent: 'center', alignItems: 'center', borderRadius: 8}}><Text style={{fontSize: 24,fontWeight: 'bold', color: 'white'}}>Pay</Text></TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
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
    }
});
