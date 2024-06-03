import React, { useState } from 'react';
import { StyleSheet, View, Image, Text, TextInput, Button, TouchableOpacity , KeyboardAvoidingView} from 'react-native';
import firebase from 'firebase/app';
import { useRouter } from 'expo-router';
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Define your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyACBw13i0sCBJMweZq51_Wy5mqv35gZNQI",
    authDomain: "nextgen-d0944.firebaseapp.com",
    projectId: "nextgen-d0944",
    storageBucket: "nextgen-d0944.appspot.com",
    messagingSenderId: "358251908952",
    appId: "1:358251908952:web:3ba548c468f035d5ec1f2d",
    measurementId: "G-VHCEZFKYGM"
  };

  // Initialize Firebase app with the provided configuration
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password) // Use 'auth' from 'firebase-config'
        .then(userCredential => {
            // Successfully signed in
            success();
            const user = userCredential.user;
            console.log('User signed in:', user);
        })
        .catch(error => {
            // Error handling
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Sign in error:', errorCode, errorMessage);
        });

  }

  const success = () => {
    router.push('/Cashier/Dashboard');
  }
  
  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <View style={styles.leftSide}>
        <Image
          source={require('../Image/Ui.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.rightSide}>
        <View style={{flexDirection: 'row'}}>
           <Text style={styles.title}>Sign</Text>
           <Text style={styles.title2}>In</Text>
        </View>
        <Text style={styles.subtitle}>Welcome Back Again</Text>
        <View style={{marginTop: 50, flexDirection: 'column', gap: 30}}>
            <View style={{flexDirection: 'column', gap: 8}}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="Enter your email here..."  onChangeText={(text) => setEmail(text)}/>
            </View>
            <View style={{flexDirection: 'column', gap: 8}}>
                <Text style={styles.label}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter your Password here..." secureTextEntry={true}  onChangeText={(text) => setPassword(text)}/>
                <Text style={styles.forgotPassword}>Forgot password?</Text>  
            </View>
            <TouchableOpacity title="Sign In" onPress={handleSignIn} style={styles.btn}><Text style={{fontWeight: 'bold', fontSize: 30, color: 'white'}}>Sign In</Text></TouchableOpacity>
          </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  leftSide: {
    flex: 1,
 
  },
  rightSide: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  title: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
},
title2: {
    fontSize: 70,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
    backgroundColor: '#074173',
    borderRadius: 8,
    paddingHorizontal: 10
  },
  subtitle: {
    fontSize: 24,
   marginTop: 10,
   fontWeight: 'medium',
  },
  input: {
    height: 70,
    width: 450,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  forgotPassword: {
    marginTop: 20,
    color: '#036BB9',
    textAlign: 'right',
    paddingRight: 170,
    fontSize: 20,
  },
  forgotPassword1: {
    
    
  },
  label: {
    fontSize: 28,
    fontWeight: 'bold',

  },
  btn:{
    height: 70,
    width: 450,
    backgroundColor: '#153448',
    justifyContent: 'center',
    alignItems:"center",
    borderRadius: 10
  }
});
