import React, { useState } from 'react';
import LanguageModal from './LanguageModal.js';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button, 
    SafeAreaView
} from 'react-native';
import MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';


import {connect} from 'react-redux';
import {joinRoom} from '../src/store/actions/videoActions';
import {myStream, remoteStream as reducerRemoteStream} from '../src/store/reducer/videoReducer';

import {
    RTCPeerConnection,
    RTCIceCandidate,
    RTCSessionDescription,
    RTCView,
    MediaStream,
    MediaStreamTrack,
    mediaDevices,
    registerGlobals,
} from 'react-native-webrtc';

// webRTC Peer Connection variables
const config = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302'],
    },
  ],
};
const pc1 = new RTCPeerConnection(config);
const pc2 = new RTCPeerConnection(config);
const offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};

const username = "Bill";

/**
 * TODO: 
 * - link this to the LanguageModal
 */
const CallScreen = ({ navigation }) => {
    const [startButton, setStartButton] = useState(false);
    const [callButton, setCallButton] = useState(false);
    const [hangupButton, setHangupButton] = useState(true);
    const [stopButton, setStopButton] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);

      const startLocalVideo = async () => {
        // enable call and stop (local video) buttons
        // disable start button
        setStartButton(true)
        setStopButton(false)
        if (!remoteStream) {
            setCallButton(false)
        }

        console.log("start local video")
        if (!localStream) {
            let s;
            try {
                s = await mediaDevices.getUserMedia({audio:true, video:{ facingMode: "user" }})
                setLocalStream(s)
            } catch (e) {
                console.error(e)
            }
        }
    };

    const connectRemoteVideo = async () => {
        // enable hangup button
        // disable call button
        setHangupButton(false)
        setCallButton(true)
        
        await joinRoom(localStream)
        // this.props.joinRoom(localStream)

        console.log("remote stream")
        console.log(reducerRemoteStream)
        console.log("mystream")
        console.log(myStream)
        
        // set remote stream
        if (!remoteStream && reducerRemoteStream) {
            // set remote stream to reduce remote stream
            setRemoteStream(reducerRemoteStream) 
            console.log("remote stream: ", reducerRemoteStream)
        }
    }



    const stopRemoteVideo = async () => {
        // enable call button and start button
        // disable hangup button and stop button
        setStartButton(false)
        setCallButton(false)
        setHangupButton(true)
        // setStopButton(true)

        if (remoteStream) {
            remoteStream.release();
            setRemoteStream(null);
        }
    }

    const stopLocalVideo = async () => {
        // enable start button 
        // disable stop button
        setStartButton(false)
        setStopButton(true)

        if (localStream) {
            localStream.release();
            setLocalStream(null);
        }
    };

    return (
        // <View class="main-page-container" style={{ flex: 1, padding: 16 }}>
        //   {/* the video element would go here */}
        // </View>
        <>
            <SafeAreaView class="main-page-container" style={styles.body}>
                {
                localStream &&
                <RTCView
                    streamURL={localStream.toURL()}
                    style={styles.stream} />
                }
                {
                remoteStream &&
                <RTCView
                    streamURL={remoteStream.toURL()}
                    style={styles.stream} />
                }
                <SafeAreaView style={styles.footer}>
                    <Button title="start video" disabled={startButton} onPress={startLocalVideo} />
                    <Button title="call" disabled={callButton} onPress={connectRemoteVideo} />
                    <Button title="hang up" disabled={hangupButton} onPress={stopRemoteVideo} />
                    <Button title="stop video" disabled={stopButton} onPress={stopLocalVideo} />
                </SafeAreaView>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    // ...StyleSheet.absoluteFill,
    flex: 1, 
    padding: 16,
  }, 
  stream: {
    flex: 1,
  },
  footer: {
    backgroundColor: 'steelblue',
    position: 'absolute',
    bottom: 0, 
    left: 0, 
    right: 0.
  },
});

const mapStateToProps = ({video}) =>({video,});

export default connect(mapStateToProps, {joinRoom})(CallScreen);