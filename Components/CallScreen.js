import React, { useState, useEffect } from 'react';
import LanguageModal from './LanguageModal.js';
import { 
    StyleSheet, 
    View, 
    Text,
    Dimensions, 
    TouchableOpacity,
    Image
} from 'react-native';

import {   RTCView, mediaDevices } from 'react-native-webrtc';

import { useSelector, useDispatch } from 'react-redux';
import { joinRoom, closeRoom } from '../store/actions/videoActions';

const username = "Bill";
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

/**
 * TODO: 
 * - link this to the LanguageModal
 */
const CallScreen = ({ navigation }) => {
    const [isFront, setIsFront] = useState(true);
    const [playAudio, setAudio] = useState(true);
    const [playVideo, setVideo] = useState(true);
    const [endCall, setEndCall] = useState(false);
    const [tempRemote, setTempRemote] = useState(null);

    const video = useSelector(state => state.video);
    const dispatch = useDispatch();
    const { myStream, remoteStream, streams } = video;

    useEffect(() => {
        startCall();
    }, [])

    const getRemoteVideo = async () => {
        let s = await mediaDevices.getUserMedia({audio:true, video:{ facingMode: "environment" }})
        setTempRemote(s)
    }

    const startCall = async () => {
        console.log("start local video")
        mediaDevices.enumerateDevices().then(sourceInfos => {
            let videoSourceId;
            for (let i = 0; i < sourceInfos.length; i++) {
                const sourceInfo = sourceInfos[i];
                if(sourceInfo.kind == "videoinput" && sourceInfo.facing == (isFront ? "front" : "environment")) {
                    videoSourceId = sourceInfo.deviceId;
                }
            }
            mediaDevices.getUserMedia({
                audio: playAudio,
                video: playVideo == true ? {
                width: 640,
                height: 480,
                frameRate: 30,
                facingMode: (isFront ? "user" : "environment"),
                deviceId: videoSourceId
                } : false
            })
            .then(stream => {
                console.log(stream)
                joinRoom(stream, dispatch)
            })
            .catch(error => {
                console.log(error);
            });
        });
    };

    const confirmedEndCall = async () => {
        navigation.navigate('HomeStack', { screen: 'Feedback1' });
        closeRoom(dispatch);
    }

    const playVideoSwitch = async () => {
        setVideo(playVideo == true ? false : true);
        startCall();
    }

    const playAudioSwitch = async () => {
        setAudio(playAudio == true ? false: true);
        startCall();
    }

    const flipCamera = async () => {
        setIsFront(isFront == true ? false : true);
        startCall();
    }

    const endInitialCall = () => {
        setEndCall(true);
    }

    const cancelEndCall = () => {
        setEndCall(false);
    }

    // CALL CONTROLS ------->
    // color for call control text 
    let controlTextColor = '#394248';
    if (tempRemote != null) {
      controlTextColor = 'white';
    }

    // turn video on/off text
    let videoControlText;
    if (playVideo) {
      videoControlText = 
        <Text style={{color:controlTextColor, paddingTop:5, width:50, textAlign:'center'}}>Stop Video</Text>
    } else {
      videoControlText = 
        <Text style={{color:controlTextColor, paddingTop:5, width:50, textAlign:'center'}}>Start Video</Text>
    }

    // turn audio on/off text
    let audioControlText;
    if (playAudio) {
      audioControlText =  <Text style={{color:controlTextColor, paddingTop:5, width:50, textAlign:'center'}}>Mute Audio</Text>
    } else {
      audioControlText =  <Text style={{color:controlTextColor, paddingTop:5, width:50, textAlign:'center'}}>Unmute Audio</Text>
    }

    // end call confirmation
    let endCallConf;
    if (endCall) {
      endCallConf = 
        <View style={styles.confirmEndCall}>
          {/* text confirmation */}
          <Text style={styles.confirmEndCallText}>Confirm end call?</Text>

          <View style={{flexDirection:'row', justifyContent:'space-evenly', width:250}}>
            <View style={{alignItems:'center'}}>
                {/* cancel button */}
                <TouchableOpacity onPress={cancelEndCall} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#DEE0EA', width:50, height:50}}>
                    <Image source={require('./../assets/up_left.png')} style={styles.iconLarge} />
                </TouchableOpacity>
                <Text style={{marginTop:10}}>Cancel</Text>
            </View>
            <View style={{alignItems:'center'}}>
                {/* end call button */}
                <TouchableOpacity onPress={confirmedEndCall} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#FF7575', width:50, height:50}}>
                    <Image source={require('./../assets/end.png')} style={styles.icon} />
                </TouchableOpacity>
                <Text style={{marginTop:10}}>End</Text>
            </View>
          </View>
        </View>
    } else {
      endCallConf = null;
    }

    return (
        <View style={{backgroundColor:'white', height: height}}>
            {!remoteStream ? (
                <View style={{justifyContent:'center'}}>
                    {/* close icon */}
                    {/* TODO: add onPress -> leave page */}
                    <TouchableOpacity>
                        <Image source={require('./../assets/close_icon.png')} style={{alignSelf:'flex-end', resizeMode:'contain', height:35, marginTop:20}} />
                    </TouchableOpacity>

                    {/* waiting room text */}
                    <View style={{alignItems:'center', fontSize:14}}>
                        <Text style={{color:'#4A69D9', fontSize:32, fontWeight: 'bold', textAlign:'center', marginTop:20, marginBottom:20}}>Please wait, calling a translator...</Text>
                        <Text style={{color: '#666666', marginBottom: 10}}>Estimated wait: 
                            <Text style={{color: '#666666', fontWeight:'bold'}}> 2 minutes</Text>
                        </Text>
                        <Text style={{color: '#666666', marginBottom: 20}}>You will be connected automatically...</Text>
                    </View>

                    {/* video preview */}
                    {myStream ? (
                    <View>
                        <View style={{backgroundColor: 'black', borderRadius:20, margin:20, height:height*0.4, width:250, overflow:'hidden', alignSelf:'center'}}>
                        <RTCView streamURL = {myStream.toURL()}
                        objectFit='cover'
                        style={{flex: 1, height: height * 0.4}} />
                        </View>

                        {/* video preview controls */}
                        <View style={{flexDirection:'row', justifyContent:'space-evenly', bottom:-25}}>
                            {/* turn video on/off */}
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={playVideoSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#4A69D9', width:50, height:50}}>
                                    <Image source={require('./../assets/camera.png')} style={styles.icon} />
                                </TouchableOpacity>
                                {/* <Text style={{color:'white', paddingTop:5}}>Camera</Text> */}
                                {videoControlText}
                            </View>

                            {/* turn audio on/off */}
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={playAudioSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#4A69D9', width:50, height:50}}>
                                    <Image source={require('./../assets/audio.png')} style={styles.iconLarge} />
                                </TouchableOpacity>
                                {audioControlText}
                            </View>

                            {/* switch video camera view */}
                            <View style={{alignItems:'center'}}>
                                <TouchableOpacity onPress={flipCamera} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#4A69D9', width:50, height:50}}>
                                    <Image source={require('./../assets/switch.png')} style={styles.iconLarge} />
                                </TouchableOpacity>
                                <Text style={{color:'#394248', paddingTop:5, width:50, textAlign:'center'}}>Switch Camera</Text>
                            </View>
                        </View>
                    </View>) : null}
                </View>
            ) : (
                <View>
                    {/* display remote video stream */}
                    {tempRemote ? (<RTCView 
                    objectFit='cover' 
                    style={{backgroundColor:'black', height:height }} 
                    streamURL={tempRemote.toURL()} />) : null}
                    

                    {endCallConf}
                
                    {/* display local video stream */}
                    {myStream ? (<RTCView 
                    objectFit='cover' 
                    style={{position:'absolute', backgroundColor:'black', height:100, width:height*0.2, bottom:0, right:20, marginBottom:155}} 
                    streamURL={myStream.toURL()} />) : null}
                    
                
                    {/* video call controls */}
                    <View style={{position:'absolute', bottom:0, width:width, height: 135, flexDirection:'row', justifyContent:'space-evenly', backgroundColor:'rgba(0, 0, 0, 1)', paddingTop:10, paddingBottom:10, borderTopLeftRadius:0, borderTopRightRadius:0}}>
                        {/* turn video on/off */}
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity onPress={playVideoSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#AAAAAA', width:50, height:50}}>
                                <Image source={require('./../assets/camera.png')} style={styles.icon} />
                            </TouchableOpacity>
                            {/* <Text style={{color:'white', paddingTop:5}}>Camera</Text> */}
                            {videoControlText}
                        </View>
                
                        {/* turn audio on/off */}
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity onPress={playAudioSwitch} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#AAAAAA', width:50, height:50}}>
                                <Image source={require('./../assets/audio.png')} style={styles.iconLarge} />
                            </TouchableOpacity>
                            {/* <Text style={{color:'white', paddingTop:5}}>Mute</Text> */}
                            {audioControlText}
                        </View>
                
                        {/* switch video camera view */}
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity onPress={flipCamera} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#AAAAAA', width:50, height:50}}>
                                <Image source={require('./../assets/switch.png')} style={styles.iconLarge} />
                            </TouchableOpacity>
                            <Text style={{color:'white', paddingTop:5, width:50, textAlign:'center'}}>Switch Camera</Text>
                        </View>
                
                        {/* end call */}
                        <View style={{alignItems:'center'}}>
                            <TouchableOpacity onPress={confirmedEndCall} style={{alignItems:'center', justifyContent:'center', borderRadius:50, backgroundColor:'#FF7575', width:50, height:50}}>
                                <Image source={require('./../assets/end.png')} style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={{color:'white', paddingTop:5, width:40, textAlign:'center'}}>End Call</Text>
                        </View>
                    </View>
                </View>
            ) }
        </View>
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
  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
  blueText: {
    color: '#4A69D9',
    fontSize: 32,
  },
  bolded: {
    fontWeight: 'bold',
  },
  icon: {
    flex: 1,
    aspectRatio: 0.5, 
    resizeMode: 'contain',
  },
  iconLarge: {
    flex: 1,
    aspectRatio: 0.32,
    resizeMode:'contain'
  },
  confirmEndCall: {
    position:'absolute', 
    backgroundColor:'#FFF',
    borderRadius: 20,
    alignItems: 'center',
    height: 225,
    width: 250,
    top:200, 
    alignSelf: 'center',
    justifyContent: 'center',
  },
  confirmEndCallText: {
    fontWeight: 'bold',
    fontSize: 24,
    width: 100,
    marginBottom: 20,
  },
});

export default CallScreen;