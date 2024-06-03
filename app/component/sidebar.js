import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import Frame from '../../Image/Frame.png';
import Icon from '../../Image/IconB.png';
import Icon1 from '../../Image/IconBc.png';
import Left from '../../Image/Group.png';
import { useRouter } from "expo-router";

const Sidebar = ({ isVisible }) => {
  const router = useRouter();

  const GoDashboard = () => {
    router.push('/Cashier/Dashboard');
  }
  const ManualOrder = () => {
    router.push('/Cashier/Pesanan');
  }

  if (!isVisible) return null;

  return (
    <View style={styles.sidebar}>
      <View style={{ }}>
        <View style={{ alignItems: 'center' , maxWidth: 200, maxHeight: 200}}>
          <Image source={Frame} style={{  borderRadius: 8, width: 200, height: 200 }} />
        </View>
        <View style={styles.Item}>
          <TouchableOpacity onPress={GoDashboard} style={styles.btn}>
            <Image source={Icon1} style={{ width: 30, height: 30 }} />
            <Text style={styles.sidebarItem}>Orders</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1} onPress={ManualOrder}>
            <Image source={Icon} style={{ width: 30, height: 30 }} />
            <Text style={styles.sidebarItem1}>Manual Order</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Image source={Icon} style={{ width: 30, height: 30 }} />
            <Text style={styles.sidebarItem1}>Sold Out</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn1}>
            <Image source={Icon} style={{ width: 30, height: 30 }} />
            <Text style={styles.sidebarItem1}>Print Qr</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={{ flexDirection: 'row', gap: 10, paddingRight: 20, justifyContent: 'flex-end', marginTop: 50, alignItems: 'center' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white' }}>Log out</Text>
        <Image source={Left} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    </View>
  );
};

export default Sidebar;

const styles = StyleSheet.create({
  sidebar: {
    width: 250,
    backgroundColor: '#153448',
    paddingTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  btn: {
    
   
    backgroundColor: 'white',
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
  },
  btn1: {
    
    height: 60,
    borderRadius: 8,
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomWidth: 3,
    borderColor: 'white',
  },
  Item: {
    marginTop: 40,
    flexDirection: 'column',
    gap: 20,
    
  },
  sidebarItem: {
    fontSize: 24,
    marginVertical: 10,
    color: 'black',
    fontWeight: 'bold',
  },
  sidebarItem1: {
    fontSize: 20,
    marginVertical: 10,
    color: 'white',
    fontWeight: 'bold',
  },
});
