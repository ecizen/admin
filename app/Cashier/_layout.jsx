import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Sidebar from '../component/sidebar';
import Header from '../component/header';
import * as ScreenOrientation from 'expo-screen-orientation';

import { Link, Stack } from 'expo-router';


const RootLayout = () => {
  ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <View style={styles.container}>
      <Sidebar style={styles.sidebar} isVisible={isSidebarVisible}/>
      <View style={styles.main}>
        <Header toggleSidebar={toggleSidebar}/>
        <Stack style={styles.content}>
          <Stack.Screen name="Dashboard" options={{ headerShown: false }} />
          <Stack.Screen name="Pesanan" options={{ headerShown: false }} />
          <Stack.Screen name="incoming" options={{ headerShown: false }} />
        </Stack>
      </View>
    </View>
  

  );
};

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '',
    flexDirection: 'row'
  },
   sidebar: {
    width: 240,
    backgroundColor: '#153448',
    padding: 10,
    justifyContent: 'center'
  },
  sidebarItem: {
    fontSize: 18,
    marginVertical: 10,
    color: '#e91e63',
  },
  main: {
    flex: 1,
    flexDirection: 'column'
  },
  header: {
    height: 60,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: 10,
  }
});
