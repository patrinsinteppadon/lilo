import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

/**
 * todo:
 * - get images working ('source' prop isn't working as expected)
 * - figure out if there are preset text headings (like h1, or h2)
 * - figure out best practice for defining screen width
 * - How do I link a stylesheet and also directly add some manual styling inside of the `style` attribute?
 * - bug: why is User Profile pic so distorted?
 */
export default function UserProfile() {
  return (
    <View style={styles.container}>
      <Text style={styles.h1}>User Profile</Text>

      {/* ideally I can create a div here to group/separate content */}
      
      <Image source={require('./kronk.jpg')} style={styles.profileImg}/>
      <Text style={{marginTop: '15px'}}>Kronk</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    border: 'solid black 3px',
    alignItems: 'center',
    width: '500px',
    height: '650px',
  },

  // not working as expected
  profileImg: {
    width: '400px',
    height: '40%',

    resizeMode: 'cover',
  },

  h1: {
    fontWeight: 'bold',
    marginBottom: '70px',
  }
});