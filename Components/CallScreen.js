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
    registerGlobals } from 'react-native-webrtc';

import { useSelector, useDispatch } from 'react-redux';
import { joinRoom, closeRoom } from '../store/actions/videoActions';

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
    const [muteButton, setMuteButton] = useState(true);
    const [unmuteButton, setUnmuteButton] = useState(true);
    const [localStream, setLocalStream] = useState(null);
    // const [remoteStream, setRemoteStream] = useState(null);

    const video = useSelector(state => state.video);
    const dispatch = useDispatch();
    const { myStream, remoteStream, streams } = video;

    const startLocalVideo = async () => {
        // enable call and stop (local video) buttons
        // disable start button
        setStartButton(true)
        setStopButton(false)
        setMuteButton(false)
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
        
        // TODO: change this structure 
        if (localStream) {
            try {
                joinRoom(localStream, dispatch)
            } catch (e) {
                console.log(e)
            }
        } else {
            console.log('localStream is null')
        }
    };


    const stopRemoteVideo = async () => {
        // enable call button and start button
        // disable hangup button and stop button
        setStartButton(false)
        setCallButton(false)
        setHangupButton(true)
        // setStopButton(true)

        closeRoom();

        // if (remoteStream) {
        //     remoteStream.release();
        //     setRemoteStream(null);
        // }
    }

    const stopLocalVideo = async () => {
        // enable start button 
        // disable stop button
        setStartButton(false)
        setStopButton(true)

        // remove video from local stream
        var localVideoTrack = localStream.getVideoTracks()[0];
        setLocalStream(localVideoTrack.enabled = false);
    };

    const muteLocalAudio = async () => {
        setMuteButton(true)
        setUnmuteButton(false)

        // remove audio from local stream
        console.log(localStream.getAudioTracks())
        var localAudioTrack = localStream.getAudioTracks()[0];
        setLocalStream(localAudioTrack.enabled = false);
        console.log(localStream.getAudioTracks())
        console.log(localStream)
    }

    const unmuteLocalAudio = async () => {
        setUnmuteButton(true)
        setMuteButton(false)

        // add audio to local stream
        console.log("in unmute")
        console.log("localStream", localStream)
    }

    return (
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
                    <Button title="mute audio" disabled={muteButton} onPress={muteLocalAudio} />
                    <Button title="unmute audio" disabled={unmuteButton} onPress={unmuteLocalAudio} />
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


// const height = Dimensions.get('window').height;

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//   }

//   componentDidMount(){
//     let isFront = true;
//     mediaDevices.enumerateDevices().then(sourceInfos => {
//       let videoSourceId;
//       for (let i = 0; i < sourceInfos.length; i++) {
//         const sourceInfo = sourceInfos[i];
//         if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
//           videoSourceId = sourceInfo.deviceId;
//         }
//       }
//       mediaDevices.getUserMedia({
//         audio: true,
//         video: {
//           width: 640,
//           height: 480,
//           frameRate: 30,
//           facingMode: (isFront ? "user" : "environment"),
//           deviceId: videoSourceId
//         }
//       })
//       .then(stream => {
//         this.props.joinRoom(stream);
//       })
//       .catch(error => {
//         console.log(error)
//       });
//     });
//   }

//   render() {
//     const { myStream, remoteStream, streams } = this.props.video;

//     console.log("STREAMS", streams)
//     // console.log("MY STREAM", myStream)
//     // console.log("REMOTE STEAM", remoteStream)
    
//     return (
//       <View style={{flex: 1, justifyContent: 'flex-start', padding: 1}}>
//         <View 
//           style={{flex: 1, justifyContent: 'center', height: height * 0.5, borderColor: 'pink', borderWidth: 4}}>
//           {this.props.video.myStream ? (
//             <RTCView streamURL = {this.props.video.myStream.toURL()} 
//             style={{height: height * 0.4}}
//             />
//           ): null}
//         </View>
//         <View
//           style={{flex: 1, justifyContent: 'center', height: height * 0.5, borderColor: 'green', borderWidth: 4}}>
//           {remoteStream ? (
//             <RTCView streamURL = {this.props.video.remoteStream.toURL()}
//             style={{height: height * 0.4}}
//             />
//           ): null}
//         </View>
//       </View>
//     )
//   }
// }
//
// const mapStateToProps = ({video}) => ({video});
//
// export default connect(mapStateToProps, { joinRoom })(CallScreen)