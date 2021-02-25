import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
// import Video from 'react-native-video';
// import PropTypes from 'prop-types';
// import useNavigatorPermissions from 'react-use-navigator-permissions';
// import {
//     RTCPeerConnection,
//     RTCIceCandidate,
//     RTCSessionDescription,
//     RTCView,
//     MediaStream,
//     MediaStreamTrack,
//     mediaDevices,
//     registerGlobals,
//   } from 'react-native-webrtc';

const configuration = {}
const pc1 = new RTCPeerConnection(configuration);
const pc2 = new RTCPeerConnection(configuration);


export default function Test() {
    const [startButton, setStartButton] = useState(false);
    const [callButton, setCallButton] = useState(true);
    const [hangupButton, setHangupButton] = useState(true);
    const [stopButton, setStopButton] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const [remoteStream, setRemoteStream] = useState(null);
    // const [pc1, setPC1] = useState({});
    // const [pc2, setPC2] = useState({});
    const offerOptions = {
        offerToReceiveAudio: 1,
        // offerToReceiveVideo: 0
    };

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

            // start audio
            const stream = await navigator.mediaDevices.getUserMedia({audio:true, video:false})
            setLocalStream(stream)

            console.log("successfully started video")
        } catch (e) {
            console.log("error in start local video")
            console.log(e)
        }
    };

    const connectRemoveVideo = async () => {
        // enable hangup button
        // disable call button
        setHangupButton(false)
        setCallButton(true)

        // start remote video and connect 
        const audioTracks = localStream.getAudioTracks();
        // const videoTracks = localStream.getVideoTracks();
        if (audioTracks.length > 0) {
            console.log('using audio device: ' + audioTracks[0].label)
        }
        // if (videoTracks.length > 0) {
        //     console.log('using video device: ' + videoTracks[0].label)
        // }

        // pc1 = new RTCPeerConnection(configuration);
        pc1.onicecandidate = async function (event) {
            try {
                await (pc2.addIceCandidate(event.candidate))
                console.log("successful addIceCandidate (pc1)")
                console.log(`ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
            } catch (e) {
                console.log(e)
                console.log("unsuccessful addIceCandidate (pc1)")
            }
        };

        // pc2 = new RTCPeerConnection(configuration);
        pc2.onicecandidate = async function (event) {
            if (event.candidate != null) {
                await pc1.addIceCandidate(event.candidate)
                .then(console.log("successful addIceCandidate (pc2)"))
                .then(console.log(`ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`))
                .catch((e) => (console.log("unsuccessful addIceCandidate (pc2):", e.message)))
            }
        };

        pc1.oniceconnectionstatechange = function(event) {
            console.log("in ice connection state change (pc1)")
        }

        pc2.oniceconnectionstatechange = function(event) {
            console.log("in ice connection state change (pc2)")
        }

        pc2.ontrack = function(event) {
            if (remoteStream !== event.streams[0]) {
                setRemoteStream(event.streams[0])
                console.log("EVENT: ", event.streams[0])
                console.log('pc2 received remote stream');
            }
        }

        localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));
        console.log("add local stream to pc1")

        try {
           console.log('pc1 createOffer start');
           const offer = await pc1.createOffer(offerOptions);
           console.log("OFFER: ", offer)
           await onCreateOfferSuccess(offer);
        } catch (e) {
           onCreateSessionDescriptionError(e);
        }
    };

    const onCreateOfferSuccess = async (desc) => {
        console.log("in create offer success");
        console.log(`Offer from pc1\n${desc.sdp}`);
        console.log('pc1 setLocalDescription start');
        try {
          await pc1.setLocalDescription(desc);
        //   onSetLocalSuccess(pc1);
            console.log("success on create offer (pc1)")
        } catch (e) {
        //   onSetSessionDescriptionError();
            console.log("error on create offer (pc1)")
            console.log(e.message)
        }
      
        console.log('pc2 setRemoteDescription start');
        try {
          await pc2.setRemoteDescription(desc);
        //   onSetRemoteSuccess(pc2);
          console.log("success on create offer (pc2)")
        } catch (e) {
        //   onSetSessionDescriptionError();
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
        //   onCreateSessionDescriptionError(e);
            console.log(e.message)
        }
    }

    const onCreateAnswerSuccess = async (desc) => {
        console.log(`Answer from pc2:\n${desc.sdp}`);
        console.log('pc2 setLocalDescription start');
        try {
          await pc2.setLocalDescription(desc);
        //   onSetLocalSuccess(pc2);
            console.log("on create answer success")
        } catch (e) {
        //   onSetSessionDescriptionError(e);
            console.log(e.message);
            console.log("on create answer fail")
        }
        console.log('pc1 setRemoteDescription start');
        try {
          await pc1.setRemoteDescription(desc);
        //   onSetRemoteSuccess(pc1);
          console.log("on create answer success")
        } catch (e) {
        //   onSetSessionDescriptionError(e);
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
        setStopButton(true)

        // stop local audio
        await stopVideoStream()

        // end call
    };

    const stopLocalVideo = async () => {
        // enable start button 
        // disable stop button
        setStartButton(false)
        setStopButton(true)

        // stop local audio 
        await stopVideoStream()
    };

    const stopVideoStream = async () => {
         localStream.getAudioTracks()[0].stop()
         console.log("stopped!")
    }

    return(
        <View>
            <View class="video-display">
                {/* <Video></Video> */}
            </View>
            <View class="buttons">
                <Button title="start video" disabled={startButton} onPress={startLocalVideo} />
                <Button title="call" disabled={callButton} onPress={connectRemoveVideo}/>
                <Button title="hang up" disabled={hangupButton} onPress={stopRemoteVideo} />
                <Button title="stop video" disabled={stopButton} onPress={stopLocalVideo} />
            </View>
        </View>
    );
}