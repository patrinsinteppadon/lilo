import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Main from './Components/Main'
import { StyleSheet, View } from 'react-native';

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
