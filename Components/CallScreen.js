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

        // print local audio and video stream devices
        const audioTracks = localStream.getAudioTracks();
        const videoTracks = localStream.getVideoTracks();
        if (audioTracks.length > 0) {
            console.log('using audio device: ' + audioTracks[0].label)
        }
        if (videoTracks.length > 0) {
            console.log('using video device: ' + videoTracks[0].label)
        }

        // start remote video and connect
        // on ice candidate
        pc1.onicecandidate = async function (event) {
            try {
                await (pc2.addIceCandidate(event.candidate));
                console.log("pc1 onIceCandidate success");
            } catch (e) {
                console.log("pc1 onIceCandidate error: ", e.toString());
            }
            console.log(`pc1 ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
        };
        pc2.onicecandidate = async function (event) {
            try {
                await (pc1.addIceCandidate(event.candidate));
                console.log("pc2 onIceCandidate success");
            } catch (e) {
                console.log("pc2 onIceCandidate error: ", e.toString());
            }
            console.log(`pc2 ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
        };

        // on ice candidate change 
        pc1.oniceconnectionstatechange = function(event) {
            console.log(`pc1 ICE state: ${pc1.iceConnectionState}`);
            console.log('ICE state change event: ', event);
        }
        pc2.oniceconnectionstatechange = function(event) {
            console.log(`pc2 ICE state: ${pc2.iceConnectionState}`);
            console.log('ICE state change event: ', event);
        }

        // add remote stream to second (remote) peer connection
        // setRemoteStream(localStream);
        if (!remoteStream) {
            let rs;
            try {
                rs = await mediaDevices.getUserMedia({audio:true, video:{ facingMode: "environment" }})
                setRemoteStream(rs)
            } catch (e) {
                console.error(e)
            }
        }
        // pc2.ontrack = function(event) {
        //   if (remoteStream !== event.streams[0]) {
        //       setRemoteStream(event.streams[0])
        //       console.log('pc2 received remote stream');
        //   } else {
        //     console.log('pc2 did not receive a remote stream');
        //   }
        // }

        // add local stream tracks to first (local) peer connection 
        // localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));
        // console.log("add local stream to pc1")

        // create offer (connection) between peer connections
        try {
            console.log('pc1 createOffer start');
            const offer = await pc1.createOffer(offerOptions);
            await onCreateOfferSuccess(offer);
        } catch (e) {
            // onCreateSessionDescriptionError(e);
            console.error(e);
        }
    }

    const onCreateOfferSuccess = async (desc) => {
        console.log(`Offer from pc1\n${desc.sdp}`);
        console.log('pc1 setLocalDescription start');
        try {
            await pc1.setLocalDescription(desc);
            console.log("success on create offer (pc1)")
        } catch (e) {
            console.log("error on create offer (pc1)")
            console.log(e.message)
        }
    
        console.log('pc2 setRemoteDescription start');
        try {
            await pc2.setRemoteDescription(desc);
            console.log("success on create offer (pc2)")
        } catch (e) {
            console.log("error on create offer (pc2)")
            console.error(e.message)
        }
    
        console.log('pc2 createAnswer start');
        // Since the 'remote' side has no media stream we need
        // to pass in the right constraints in order for it to
        // accept the incoming offer of audio and video.
        try {
            const answer = await pc2.createAnswer();
            await onCreateAnswerSuccess(answer);
        } catch (e) {
            console.error(e.message)
        }
    }

    const onCreateAnswerSuccess = async (desc) => {
        console.log(`ANSWER FROM pc2:\n${desc.sdp}`);
        console.log('pc2 setLocalDescription start');
        try {
            await pc2.setLocalDescription(desc);
            console.log("on create answer success")
        } catch (e) {
            console.log(e.message);
            console.log("on create answer fail")
        }
        console.log('pc1 setRemoteDescription start');
        try {
            await pc1.setRemoteDescription(desc);
            console.log("on create answer success")
        } catch (e) {
            console.log(e.message)
            console.log("on create answer fail")
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

export default CallScreen;