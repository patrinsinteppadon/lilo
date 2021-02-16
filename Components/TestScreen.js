import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function TestScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
          style={{
            flex: 1,
            padding: 16,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <Text style={styles.h1}>User Profile</Text>
        <Text>Kronk</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 50,
    marginBottom: 70, 
  }
});