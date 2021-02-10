import React, { useState } from 'react';
import { View, Button, Image } from 'react-native';
// import Video from 'react-native-video';
// import PropTypes from 'prop-types';
// import useNavigatorPermissions from 'react-use-navigator-permissions';

export default function Test() {
    const [startButton, setStartButton] = useState(false);
    const [callButton, setCallButton] = useState(true);
    const [hangupButton, setHangupButton] = useState(true);
    const [stopButton, setStopButton] = useState(true);
    const [localStream, setLocalStream] = useState(null);

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
        //pc1 = new RTCPeerConnection(configuration)
    };

    const stopRemoteVideo = async () => {
        // enable call button and start button
        // disable hangup button and stop button
        setStartButton(false)
        setCallButton(false)
        setHangupButton(true)
        setStopButton(true)
    };

    const stopLocalVideo = async () => {
        // enable start button 
        // disable stop button
        setStartButton(false)
        setStopButton(true)

        // stop local audio 
        localStream.getAudioTracks()[0].stop()
        console.log("stopped!")
    };

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