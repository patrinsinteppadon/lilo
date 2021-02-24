import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function UserScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16, alignItems: 'center' }}>
        <Text style={styles.h1}>User Profile</Text>

        <View style= {{ flex: 1, alignItems: 'center' }}>
          <Image source={require('./../assets/kronk.jpg')} style={styles.profileImg}/>
          <Text>Kronk</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

// todo: figure out if img's need to be relative, rather than hardcoded at 300
const styles = StyleSheet.create({
  profileImg: {
    width: 300,
    height: 300,
    resizeMode: 'cover',
    
    marginBottom: 20,
    borderWidth: 3,
    borderColor: 'black',
  },

  h1: {
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 70, 
  }
});