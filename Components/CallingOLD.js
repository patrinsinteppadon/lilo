import React from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
// import Video from 'react-native-video';
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

class Calling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startButton:false,
            callButton:true,
            hangupButton:true,
            stopButton:true,
            localStream:null,
            pc1:null,
            pc2:null,
            localVideoSource:null,
        }
        this.startLocalVideo = this.startLocalVideo.bind(this)
        this.connectRemoteVideo = this.connectRemoteVideo.bind(this)
        this.stopRemoteVideo = this.stopRemoteVideo.bind(this)
        this.stopLocalVideo = this.stopLocalVideo.bind(this)
    }

    render() {
        return (
            <View>
                <View class="vide-screens">
                    {/* <Video source={localVideoSource} 
                            ref={(ref) => {
                                this.player = ref
                            }}
                            onBuffer={this.onBuffer}
                            onError={this.videoError} /> */}
                </View>

                <View class="buttons">
                    {/* add start button: starts local video */}
                    <Button title="start" disabled={this.state.startButton} onPress={this.startLocalVideo} />

                    {/* add call button: calls remote video  */}
                    <Button title="call" disabled={this.state.callButton} onPress={this.connectRemoteVideo} />

                    {/* add hang-up button: stops remote video  */}
                    <Button title="hang up" disabled={this.state.hangupButton} onPress={this.stopRemoteVideo} />

                    {/* add stop: stops local video */}
                    <Button title="stop" disabled={this.state.stopButton} onPress={this.stopLocalVideo} />
                </View>
            </View>
        );

    }

    async startLocalVideo() {
        // enable call and stop (local video) buttons
        // disable start button
        this.setState({startButton:true, callButton:false, stopButton:false})
        console.log("start local video")

        try {
            console.log("successfully started video")
            const stream = await navigator.mediaDevices.getUserMedia({audio:true, video:true})
            this.state.localVideoSource = stream
            this.state.localStream = stream
        } catch (e) {
            console.log('error in start local video')
            console.log(e)
        }
    }

    connectRemoteVideo() {
        // enable hangup button
        // disable call button
        this.setState({callButton:true, hangupButton:false})
        console.log("connect to remote video")

        // startTime = window.performance.now()
        const videoTracks = this.state.localStream.getVideoTracks();
        const audioTracks = this.state.localStream.getAudioTracks();
        if (videoTracks.length > 0) {
            console.log('using video device: ' + videoTracks[0].label)
        }
        if (audioTracks.length > 0) {
            console.log('using audio device: ' + audioTracks[0].label)
        }
        const configuration = {}
        //pc1 = new RTCPeerConnection(configuration)

        // THIS IS FROM TUTOTIAL ----------------->
        // startTime = window.performance.now();
        // const videoTracks = localStream.getVideoTracks();
        // const audioTracks = localStream.getAudioTracks();
        // if (videoTracks.length > 0) {
        //   console.log(`Using video device: ${videoTracks[0].label}`);
        // }
        // if (audioTracks.length > 0) {
        //   console.log(`Using audio device: ${audioTracks[0].label}`);
        // }
        // const configuration = {};
        // console.log('RTCPeerConnection configuration:', configuration);
        // pc1 = new RTCPeerConnection(configuration);
        // console.log('Created local peer connection object pc1');
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
        // <----------------- END OF TUTORIAL 
    }

    stopRemoteVideo() {
        // enable call button and start button
        // disable hangup button and stop button
        this.setState({startButton:false, callButton:false, hangupButton:true, stopButton:true})
        console.log("stop remote video")
    }

    stopLocalVideo() {
        // enable start button 
        // disable stop button
        this.setState({startButton:false, stopButton:true})
        console.log("stop local video")
    }

}

export default Calling;