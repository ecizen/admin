import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image , Text} from 'react-native';
import HamburgerIcon from '../../Image/hamburger.png';

const Header = ({ toggleSidebar }) => {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.hamburgerButton}>
        <Image source={HamburgerIcon} style={{ width: 30, height: 30 }} />
      </TouchableOpacity>
      <View style={{flexDirection: 'row', gap: 10, alignItems: 'center', justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'column', gap: 5}}>
            <Text style={styles.status}>Cashier</Text>
            <Text style={styles.name}>Lisa black</Text>
        </View>
        <View style={{width: 50, height: 50, borderRadius: 100, backgroundColor: 'gray'}}>

        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    paddingVertical: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    flexDirection: 'row'
  },
  hamburgerButton: {
    padding: 10,
  },
  status:{
    fontSize: 16,
    color: 'gray',
    fontWeight: 'bold'
  },
  name:{
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  }
});
