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


export default function Test() {
    const [startButton, setStartButton] = useState(false);
    const [callButton, setCallButton] = useState(true);
    const [hangupButton, setHangupButton] = useState(true);
    const [stopButton, setStopButton] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    const [pc1, setPC1] = useState({});
    const [pc2, setPC2] = useState({});

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
        const configuration = {}
        setPC1(new RTCPeerConnection(configuration))
        setPC1(pc1.onicecandidate = (e) => {
            onIceCandidate(pc1, e)
        })

        setPC2(new RTCPeerConnection(configuration))
        setPC2(pc2.onicecandidate = (e) => {
            onIceCandidate(pc2, e)
        })

        setPC1(pc1.iceconnectionstatechange = (e) => {
            onIceStateChange(pc1, e)
        })
        setPC2(pc2.iceconnectionstatechange = (e) => {
            onIceStateChange(pc2, e)
        })
        setPC2(pc2.track = () => {
            console.log("pc 2 got some remote stream")
        })

        // localStream.getTracks().forEach(track => setPC1(pc1.track = localStream));
        localStream.getTracks().forEach(track => setPC1(track))
        console.log("added stream to PC1 i think")

        try {
            console.log('pc1 createOffer start');
            const offer = await pc1.createOffer();
            await onCreateOfferSuccess(offer);
        } catch (e) {
            // onCreateSessionDescriptionError(e);
            console.log("error in create offer")
            console.log(e.message)
        }
        // pc1.addEventListener('icecandidate', e => onIceCandidate(pc1, e));
        // pc2 = new RTCPeerConnection(configuration);
        // console.log('Created remote peer connection object pc2');
        // pc2.addEventListener('icecandidate', e => onIceCandidate(pc2, e));
        // pc1.addEventListener('iceconnectionstatechange', e => onIceStateChange(pc1, e));
        // pc2.addEventListener('iceconnectionstatechange', e => onIceStateChange(pc2, e));
        // pc2.addEventListener('track', gotRemoteStream);
      
        // localStream.getTracks().forEach(track => pc1.addTrack(track, localStream));
        // console.log('Added local stream to pc1');
      
        // try {
        //   console.log('pc1 createOffer start');
        //   const offer = await pc1.createOffer(offerOptions);
        //   await onCreateOfferSuccess(offer);
        // } catch (e) {
        //   onCreateSessionDescriptionError(e);
        // }
    };

    const onCreateOfferSuccess = async (desc) => {
        console.log("in create offer success");
    }
    // async function onCreateOfferSuccess(desc) {
    //     console.log(`Offer from pc1\n${desc.sdp}`);
    //     console.log('pc1 setLocalDescription start');
    //     try {
    //       await pc1.setLocalDescription(desc);
    //       onSetLocalSuccess(pc1);
    //     } catch (e) {
    //       onSetSessionDescriptionError();
    //     }
      
    //     console.log('pc2 setRemoteDescription start');
    //     try {
    //       await pc2.setRemoteDescription(desc);
    //       onSetRemoteSuccess(pc2);
    //     } catch (e) {
    //       onSetSessionDescriptionError();
    //     }
      
    //     console.log('pc2 createAnswer start');
    //     // Since the 'remote' side has no media stream we need
    //     // to pass in the right constraints in order for it to
    //     // accept the incoming offer of audio and video.
    //     try {
    //       const answer = await pc2.createAnswer();
    //       await onCreateAnswerSuccess(answer);
    //     } catch (e) {
    //       onCreateSessionDescriptionError(e);
    //     }
    //   }

    const onIceCandidate = async (pc, event) => {
        console.log("on Ice Candidate: ", pc)
        onAddIceCandidateSuccess(pc)
        // try {
        //     await (getOtherPc(pc).addIceCandidate(event.candidate));
        //     onAddIceCandidateSuccess(pc);
        // } catch (e) {
        //     // onIceCandidateError(pc, e);
        //     console.log("no success with addIceCandidate")
        // }
        // console.log(`${getName(pc)} ICE candidate:\n${event.candidate ? event.candidate.candidate : '(null)'}`);
    }

    const onAddIceCandidateSuccess = (pc) => {
        console.log("addIceCandidate success")
    }

    const onIceStateChange = (pc, e) => {
        console.log("onIceStateChange")
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