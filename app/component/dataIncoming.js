import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import React, { useState } from 'react';
import { router } from 'expo-router';
import OrderModal from './optionmodal'; // Adjust the path as necessary

export default function Customer() {
    const [modalVisible, setModalVisible] = useState(false);
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

    const nextProgres = () => {
        setModalVisible(false);
        router.push('/Cashier/incoming');
    };

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
            <OrderModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                count={count}
                incrementCount={incrementCount}
                decrementCount={decrementCount}
                nextProgres={nextProgres}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
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
});
