import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Stack } from 'expo-router';

import * as ScreenOrientation from 'expo-screen-orientation'
const RootLayout =()=> {


        ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
        const linking = {
          prefixes: ['yourapp://'],
          config: {
            screens: {
              Dashboard: 'dashboard',
              Cashier: 'cashier/:id',
            },
          },
        };

  return (
    
    <Stack>
        <Stack.Screen name="index" options={{headerShown: false}}/>
        <Stack.Screen name="Login" options={{headerShown: false}}/>
        <Stack.Screen name="Cashier" options={{headerShown: false}}/>
      
    </Stack>
  );
}

export default RootLayout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
