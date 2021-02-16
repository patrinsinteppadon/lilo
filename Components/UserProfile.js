import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
 * todo:
 * - controlling for things like positioning or size. Its so HARD
 */
export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>User Profile</Text>

      {/* ideally I can create a container here to group/separate content */}
      <Image source={require('./kronk.jpg')} style={styles.profileImg}/>
      <Text>Kronk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderWidth: 3,
    height: '80%',
  },

  profileImg: {
    // width: '400px',
    height: '40%',
    resizeMode: 'cover',
    
    borderWidth: 3,
    borderColor: 'black',
  },

  h1: {
    fontWeight: 'bold',
    marginBottom: 70, 
  }
});