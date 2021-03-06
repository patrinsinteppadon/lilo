import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './Components/Main'
import { StyleSheet, Text, View } from 'react-native';
import UserProfile from './Components/UserProfile.js';
// import firebase from 'firebase/app';
// import 'firebase/database';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    backgroundColor: 'lightblue',
    alignItems: 'center',
    // justifyContent: 'center',
  },
});

  // // Initialize Firebase
  // var firebaseConfig = {
  //   apiKey: "AIzaSyAYH0zqdMHO0mhj0ee_7_kZyIEtn7vaOHA",
  //   authDomain: "capstone-lilo.firebaseapp.com",
  //   databaseURL: "https://capstone-lilo-default-rtdb.firebaseio.com",
  //   projectId: "capstone-lilo",
  //   storageBucket: "capstone-lilo.appspot.com",
  //   messagingSenderId: "457024640739",
  //   appId: "1:457024640739:web:8e31884b8a6b002a8357d6",
  //   measurementId: "G-L2BJQKHLZP"
  // };

  // firebase.initializeApp(firebaseConfig);