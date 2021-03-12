import React, { useState } from 'react';
import LanguageModal from './LanguageModal.js';
import { 
    StyleSheet, 
    Image,
    View, 
    Text, 
    Button, 
    Pressable, 
    Modal, 
    Alert 
} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';

const username = "Bill";

/**
 * TODO: 
 * - add behavior to each button when tapped
 *     - flip should change local video stream to something else
 *     - camera should turn off local video (hide the img)
 *     - mute should change the icon to be 'microphone'
 *     - end should return to the home screen
 */
const CallScreen = ({ navigation }) => {
    return (
        <View class="main-page-container" style={{ flex: 1, padding: 16 }}>
          {/* the video element would go here */}
          <View style= {{ flex: 1, alignItems: 'center' }}>
            <Image source={require('./../assets/kuzco.jpg')} style={styles.remoteImg}/>
          </View>
          <View style= {{ flex: 1, alignItems: 'flex-end' }}>
            <Image source={require('./../assets/kronk.jpg')} style={styles.localImg}/>
          </View>


          <View style={styles.callOptions}>
            <Pressable style={styles.button}>
              <MaterialCommunityIcons 
                style={{color: '#F4F5FA'}}
                name="camera"
                size={40}
              />
            </Pressable>
            <Pressable style={styles.button}>
              <MaterialCommunityIcons 
                style={{color: '#F4F5FA'}}
                name="microphone-off"
                size={40}
              />
            </Pressable>
            <Pressable style={styles.button}>
              <MaterialCommunityIcons 
                style={{color: '#F4F5FA'}}
                name="cached"
                size={40}
              />
            </Pressable>
            <Pressable style={[styles.button, styles.endButton]}>
              <MaterialCommunityIcons 
                style={{color: '#F4F5FA'}}
                name="phone-hangup"
                size={40}
              />
            </Pressable>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({

  // call options =======================
  callOptions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  button: {
    backgroundColor: 'gray',
    borderRadius: 50,
    padding: 10,
    elevation: 2
  },
  endButton: {
    backgroundColor: '#FF7575',
  },

  // video streams =====================
  remoteImg: {
    width: 400,
    height: 400,
    resizeMode: 'cover',
    
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'black',
  },

  localImg: {
    width: 120,
    height: 120,
    resizeMode: 'cover',
    
    marginTop: 70,
    marginBottom: 10,
    borderWidth: 3,
    borderColor: 'black',
  },
});

export default CallScreen;