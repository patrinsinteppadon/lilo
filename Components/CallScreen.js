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

const CallScreen = ({ navigation }) => {
  const [showVideo, setVideo] = useState(true);
  const [mute, setMute] = useState(false);
  const [flipCamera, setFlipCamera] = useState(false);

  return (
    <View class="main-page-container" style={{ flex: 1, padding: 16 }}>
      {/* remote video */}
      <View style= {{ flex: 1, alignItems: 'center' }}>
        <Image source={require('./../assets/kuzco.jpg')} style={styles.remoteImg}/>
      </View>

      {/* local video */}
      <View style= {{ flex: 1, alignItems: 'flex-end' }}>
        { showVideo ? 
          <Image 
            source={
              flipCamera ? 
                require('./../assets/shampoo.jpg')
                : require('./../assets/kronk.jpg')} 
            style={styles.localImg}/> : null }
      </View>


      <View style={styles.callOptions}>
        {/* video on/off */}
        <Pressable style={styles.button}>
          <MaterialCommunityIcons 
            style={{color: '#F4F5FA'}}
            name={ showVideo ? "camera-off" : "camera" }
            size={40}
            onPress={() => setVideo(!showVideo)}
          />
        </Pressable>

        {/* toggle mute */}
        <Pressable style={styles.button}>
          <MaterialCommunityIcons 
            style={{color: '#F4F5FA'}}
            name={ mute ? "microphone" : "microphone-off" }
            size={40}
            onPress={() => setMute(!mute)}
          />
        </Pressable>

        {/* flip camera */}
        <Pressable style={styles.button}>
          <MaterialCommunityIcons 
            style={{color: '#F4F5FA'}}
            name="cached"
            size={40}
            onPress={() => setFlipCamera(!flipCamera)}
          />
        </Pressable>

        {/* end call */}
        <Pressable style={[styles.button, styles.endButton]}>
          <MaterialCommunityIcons 
            style={{color: '#F4F5FA'}}
            name="phone-hangup"
            size={40}
            onPress={() => navigation.navigate('Home')}
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