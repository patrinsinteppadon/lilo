import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserProfile from './Components/UserProfile.js';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{marginBottom: '5px'}}>Testing! Welcome to the app!</Text>
      <StatusBar style="auto" />

      <UserProfile />
    </View>
  );
}

// do we need to work with Stylesheet instead of using CSS files?
// maybe that's something specific to react Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
