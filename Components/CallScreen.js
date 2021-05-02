// import React, { useState, useEffect } from 'react';
// import LanguageModal from './LanguageModal.js';
// import { 
//     StyleSheet, 
//     View, 
//     Text, 
//     Button, 
//     SafeAreaView
// } from 'react-native';
// import MaterialCommunityIcons
// from 'react-native-vector-icons/MaterialCommunityIcons';

// import {   
//     RTCPeerConnection,
//     RTCIceCandidate,
//     RTCSessionDescription,
//     RTCView,
//     MediaStream,
//     MediaStreamTrack,
//     mediaDevices,
//     registerGlobals } from 'react-native-webrtc';

// import { useSelector, useDispatch } from 'react-redux';
// import { joinRoom, closeRoom } from '../store/actions/videoActions';

// const username = "Bill";

// /**
//  * TODO: 
//  * - link this to the LanguageModal
//  */
// const CallScreen = ({ navigation }) => {
//     const [startButton, setStartButton] = useState(false);
//     const [callButton, setCallButton] = useState(false);
//     const [hangupButton, setHangupButton] = useState(true);
//     const [stopButton, setStopButton] = useState(true);
//     const [muteButton, setMuteButton] = useState(true);
//     const [unmuteButton, setUnmuteButton] = useState(true);
//     const [localStream, setLocalStream] = useState(null);
//     // const [remoteStream, setRemoteStream] = useState(null);

//     const video = useSelector(state => state.video);
//     const dispatch = useDispatch();
//     const { myStream, remoteStream, streams } = video;

//     const startLocalVideo = async () => {
//         // enable call and stop (local video) buttons
//         // disable start button
//         setStartButton(true)
//         setStopButton(false)
//         setMuteButton(false)
//         if (!remoteStream) {
//         setCallButton(false)
//         }

//         console.log("start local video")
//         if (!localStream) {
//             let s;
//             try {
//                 s = await mediaDevices.getUserMedia({audio:true, video:{ facingMode: "user" }})
//                 setLocalStream(s)
//             } catch (e) {
//                 console.error(e)
//             }
//         }
//     };

//     const connectRemoteVideo = async () => {
//         // enable hangup button
//         // disable call button
//         setHangupButton(false)
//         setCallButton(true)
        
//         // TODO: change this structure 
//         if (localStream) {
//             try {
//                 joinRoom(localStream, dispatch)
//             } catch (e) {
//                 console.log(e)
//             }
//         } else {
//             console.log('localStream is null')
//         }
//     };


//     const stopRemoteVideo = async () => {
//         // enable call button and start button
//         // disable hangup button and stop button
//         setStartButton(false)
//         setCallButton(false)
//         setHangupButton(true)
//         // setStopButton(true)

//         closeRoom();

//         // if (remoteStream) {
//         //     remoteStream.release();
//         //     setRemoteStream(null);
//         // }
//     }

//     const stopLocalVideo = async () => {
//         // enable start button 
//         // disable stop button
//         setStartButton(false)
//         setStopButton(true)

//         // remove video from local stream
//         var localVideoTrack = localStream.getVideoTracks()[0];
//         setLocalStream(localVideoTrack.enabled = false);
//     };

//     const muteLocalAudio = async () => {
//         setMuteButton(true)
//         setUnmuteButton(false)

//         // remove audio from local stream
//         console.log(localStream.getAudioTracks())
//         var localAudioTrack = localStream.getAudioTracks()[0];
//         setLocalStream(localAudioTrack.enabled = false);
//         console.log(localStream.getAudioTracks())
//         console.log(localStream)
//     }

//     const unmuteLocalAudio = async () => {
//         setUnmuteButton(true)
//         setMuteButton(false)

//         // add audio to local stream
//         console.log("in unmute")
//         console.log("localStream", localStream)
//     }

//     return (
//         <>
//             <SafeAreaView class="main-page-container" style={styles.body}>
//                 {
//                 localStream &&
//                 <RTCView
//                     streamURL={localStream.toURL()}
//                     style={styles.stream} />
//                 }
//                 {
//                 remoteStream &&
//                 <RTCView
//                     streamURL={remoteStream.toURL()}
//                     style={styles.stream} />
//                 }
//                 <SafeAreaView style={styles.footer}>
//                     <Button title="start video" disabled={startButton} onPress={startLocalVideo} />
//                     <Button title="call" disabled={callButton} onPress={connectRemoteVideo} />
//                     <Button title="hang up" disabled={hangupButton} onPress={stopRemoteVideo} />
//                     <Button title="stop video" disabled={stopButton} onPress={stopLocalVideo} />
//                     <Button title="mute audio" disabled={muteButton} onPress={muteLocalAudio} />
//                     <Button title="unmute audio" disabled={unmuteButton} onPress={unmuteLocalAudio} />
//                 </SafeAreaView>
//             </SafeAreaView>
//         </>
//         // <SafeAreaView style={{ flex: 1 }}>
//         //     <View style={styles.textContainer}>
//         //         <Text style={styles.textContainer, styles.blueText}>Please wait, calling a translator...</Text>
//         //         <Text>Estimated wait:</Text>
//         //         <Text style={styles.bolded}>2 minutes</Text>
//         //     </View>
//         //     <View>
//         //         {localStream ? (
//         //             <RTCView streamURL={localStream.toURL()} />
//         //         ) : null}
//         //     </View>
//         // </SafeAreaView>
//     );
// }

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: 'white',
//     // ...StyleSheet.absoluteFill,
//     flex: 1, 
//     padding: 16,
//   }, 
//   stream: {
//     flex: 1,
//   },
//   footer: {
//     backgroundColor: 'steelblue',
//     position: 'absolute',
//     bottom: 0, 
//     left: 0, 
//     right: 0.
//   },
//   textContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
//   blueText: {
//     color: '#4A69D9',
//     fontSize: 32,
//   },
//   bolded: {
//     fontWeight: 'bold',
//   }
// });

// export default CallScreen;



import React from 'react';
import { View, Text, Dimensions, Button, TouchableOpacity } from 'react-native';
import { mediaDevices, RTCView } from 'react-native-webrtc';

import { connect } from 'react-redux';
import { joinRoom, leaveRoom } from './store/actions/videoActions';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFront: true,
      playAudio: true,
      playVideo: true,
      endCall: false,
    };
  }

  componentDidMount(){
    this.startVideo();
  }

  startVideo = async () => {
    // let isFront = true;
    mediaDevices.enumerateDevices().then(sourceInfos => {
      let videoSourceId;
      for (let i = 0; i < sourceInfos.length; i++) {
        const sourceInfo = sourceInfos[i];
        if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (this.state.isFront ? "front" : "environment")) {
          videoSourceId = sourceInfo.deviceId;
        }
      }
      mediaDevices.getUserMedia({
        audio: this.state.playAudio,
        video: this.state.playVideo == true ? {
          width: 640,
          height: 480,
          frameRate: 30,
          facingMode: (this.state.isFront ? "user" : "environment"),
          deviceId: videoSourceId
        } : false
      })
      .then(stream => {
        console.log(stream)
        this.props.joinRoom(stream)
      })
      .catch(error => {
        console.log(error);
      });
    });
  }

  playVideoSwitch = async () => {
    this.setState({
      playVideo: ((this.state.playVideo == true) ? false : true)
    })
    this.startVideo()
  }

  playAudioSwitch = async () => {
    this.setState({
      playAudio: ((this.state.playAudio == true) ? false : true)
    })
    this.startVideo()
  }

  flipCamera = async () => {
    this.setState({
      isFront: ((this.state.isFront == true) ? false : true)
    })
    this.startVideo()
  }

  endCall = async () => {
    this.setState({
      endCall: true
    })
    // add pop up of are you sure 
    this.props.leaveRoom()
  }

  render() {
    // get local and remote streams from state 
    const { myStream, remoteStream } = this.props.video;

    // color for call control text 
    let controlTextColor = 'black';
    if (remoteStream != null) {
      controlTextColor = 'white';
    }

    // turn video on/off text
    let videoControlText;
    if (this.state.playVideo) {
      videoControlText = 
        <Text style={{color:controlTextColor, paddingTop:5}}>Stop video</Text>
    } else {
      videoControlText = 
        <Text style={{color:controlTextColor, paddingTop:5}}>Start video</Text>
    }

    // turn audio on/off text
    let audioControlText;
    if (this.state.playAudio) {
      audioControlText =  <Text style={{color:controlTextColor, paddingTop:5}}>Mute audio</Text>
    } else {
      audioControlText =  <Text style={{color:controlTextColor, paddingTop:5}}>Unmute audio</Text>
    }

    // end call confirmation
    let endCallConf;
    if (this.state.endCall) {
      endCallConf = 
        <View>
          {/* text confirmation */}
          <Text>Confirm end call?</Text>
          {/* cancel button */}
          <TouchableOpacity></TouchableOpacity>
          <Text>Cancel</Text>
          {/* end call button */}
          <TouchableOpacity></TouchableOpacity>
          <Text>End</Text>
        </View>
    } else {
      endCallConf = null;
    }

    return (
      <View style={{flex: 1, justifyContent: 'flex-start', padding: 1}}>
        {/* {!remoteStream && myStream ? ( */}
        {!remoteStream ? (
          <View style={{flex:1, justifyContent:'center'}}>
            {/* waiting room text */}
            <View style={{alignItems:'center', fontSize:14}}>
              <Text style={{color:'#4A69D9', fontSize:32, textAlign:'center', marginTop:10, marginBottom:20}}>Please wait, calling a translator...</Text>
              <Text>Estimated wait:</Text>
              <Text style={{fontWeight:'bold', marginBottom:20}}>2 minutes</Text>
            </View>

            {/* video preview */}
            {myStream ? (
              <View>
                <View style={{backgroundColor: 'black', borderRadius: 20, margin:20, height: height*0.55, overflow:'hidden'}}>
                  <RTCView streamURL = {myStream.toURL()}
                  objectFit='cover'
                  style={{flex: 1, height: height * 0.5}} />
                </View>

                {/* video preview controls */}
                <View style={{flexDirection:'row', width:width, justifyContent:'space-evenly'}}>
                  {/* turn video on/off */}
                  <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={this.playVideoSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'lightgray', width:50, height:50}}>
                      <Text>B</Text>
                    </TouchableOpacity>
                    {/* <Text style={{color:'white', paddingTop:5}}>Camera</Text> */}
                    {videoControlText}
                  </View>

                  {/* turn audio on/off */}
                  <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={this.playAudioSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'lightgray', width:50, height:50}}>
                      <Text>B</Text>
                    </TouchableOpacity>
                    {/* <Text style={{color:'white', paddingTop:5}}>Mute</Text> */}
                    {audioControlText}
                  </View>

                  {/* switch video camera view */}
                  <View style={{alignItems:'center'}}>
                    <TouchableOpacity onPress={this.flipCamera} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'lightgray', width:50, height:50}}>
                      <Text>B</Text>
                    </TouchableOpacity>
                    <Text style={{color:'black', paddingTop:5}}>Switch camera</Text>
                  </View>
                </View>
              </View>
            ) 
            : null}
          </View>
        ) : (
          <View>
            {/* display local video stream */}
            <View style={{height:height, overflow:'hidden'}}>
              <RTCView streamURL = {myStream.toURL()}
              objectFit='cover'
              style={{flex: 1}} />
            </View>

            {/* display remote video stream */}
            {/* <View style={{height:height*0.2, backgroundColor:'white'}}></View> */}

            {/* viceo call controls */}
            <View style={{position:'absolute', bottom:0, width:width, height: 125, flexDirection:'row', justifyContent:'space-evenly', backgroundColor:'#394248', paddingTop:10, paddingBottom:10, borderTopLeftRadius:20, borderTopRightRadius:20}}>
              {/* turn video on/off */}
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={this.playVideoSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#DFE3F4', width:50, height:50}}>
                  <Text>B</Text>
                </TouchableOpacity>
                {/* <Text style={{color:'white', paddingTop:5}}>Camera</Text> */}
                {videoControlText}
              </View>

              {/* turn audio on/off */}
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={this.playAudioSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#DFE3F4', width:50, height:50}}>
                  <Text>B</Text>
                </TouchableOpacity>
                {/* <Text style={{color:'white', paddingTop:5}}>Mute</Text> */}
                {audioControlText}
              </View>

              {/* switch video camera view */}
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={this.flipCamera} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#DFE3F4', width:50, height:50}}>
                  <Text>B</Text>
                </TouchableOpacity>
                <Text style={{color:'white', paddingTop:5}}>Switch camera</Text>
              </View>

              {/* end call */}
              <View style={{alignItems:'center'}}>
                <TouchableOpacity onPress={this.endCall} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#FF7575', width:50, height:50}}>
                  <Text>B</Text>
                </TouchableOpacity>
                <Text style={{color:'white', paddingTop:5}}>End call</Text>
              </View>
            </View>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = ({video}) => ({video});

export default connect(mapStateToProps, { joinRoom, leaveRoom })(App);
