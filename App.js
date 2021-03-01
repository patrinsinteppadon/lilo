// import Socket from 'socket.io-client';
import { View, Button, StyleSheet, Text, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
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

const config = {
  iceServers: [
    {
      urls: ['stun:stun.l.google.com:19302'],
    },
  ],
};

const styles = StyleSheet.create({
  viewer: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#4F4',
  },
  stream: {
    flex: 1
  }
});

// establish two peer connections (local)
const pc1 = new RTCPeerConnection(config);
const pc2 = new RTCPeerConnection(config);
const offerOptions = {
  offerToReceiveAudio: 1,
  offerToReceiveVideo: 1
};

const App = () => {
  const [startButton, setStartButton] = useState(false);
  const [callButton, setCallButton] = useState(true);
  const [hangupButton, setHangupButton] = useState(true);
  const [stopButton, setStopButton] = useState(true);
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);

  const startLocalVideo = async () => {
    // enable call and stop (local video) buttons
    // disable start button
    setStartButton(true)
    setCallButton(false)
    setStopButton(false)

    // start local audio stream
    try {
      // get permission from user 
      // once user gives permission (first time), doesn't ask again

      // get local audio and video stream
      const stream = await mediaDevices.getUserMedia({audio:true, video:true})
      setLocalStream(stream)

      console.log("successfully started video")
      console.log(stream)
    } catch (e) {
      console.log("error in start local video")
      console.log(e)
    }
  };

  const startCall = async () => {
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
    pc2.ontrack = function(event) {
      if (remoteStream !== event.streams[0]) {
          setRemoteStream(event.streams[0])
          console.log('pc2 received remote stream');
      }
    }
    // add local stream tracks to first (local) peer connection 
    // localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));
    // console.log("add local stream to pc1")

    // create offer (connection) between peer connections
    try {
      console.log('pc1 createOffer start');
      const offer = await pc1.createOffer(offerOptions);
      await onCreateOfferSuccess(offer);
    } catch (e) {
        onCreateSessionDescriptionError(e);
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
        console.log(e.message)
    }
  
    console.log('pc2 createAnswer start');
    // Since the 'remote' side has no media stream we need
    // to pass in the right constraints in order for it to
    // accept the incoming offer of audio and video.
    try {
      const answer = await pc2.createAnswer();
      await onCreateAnswerSuccess(answer);
    } catch (e) {
        console.log(e.message)
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

  const endCall = async () => {
    // enable call button and start button
    // disable hangup button and stop button
    setStartButton(false)
    setCallButton(false)
    setHangupButton(true)
    setStopButton(true)

    // stop local audio
    await stopVideoStream()

    // end call
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

    // stop local audio 
    await stopVideoStream()
  };

  const stopVideoStream = async () => {
    // localStream.getAudioTracks()[0].stop()
    // localStream.getVideoTracks()[0].stop()
    if (localStream) {
      localStream.release();
      setLocalStream(null);
    }
    console.log("stopped!")
  }

  return(
    <SafeAreaView>
        <SafeAreaView class="video-display">
            {localStream && <RTCView streamURL={localStream.toURL()} style={styles.stream} />}
            {/* {remoteStream && <RTCView streamURL={remoteStream.toURL()} />} */}
        </SafeAreaView>
        <View class="buttons" style={styles.footer}>
            <Button title="start video" disabled={startButton} onPress={startLocalVideo} />
            <Button title="call" disabled={callButton} onPress={startCall} />
            <Button title="hang up" disabled={hangupButton} onPress={endCall}/>
            <Button title="stop video" disabled={stopButton} onPress={stopLocalVideo} />
        </View>
    </SafeAreaView>
  );
};

export default App;
