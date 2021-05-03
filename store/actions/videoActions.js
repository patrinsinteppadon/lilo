import IO from 'socket.io-client';
import Peer from 'react-native-peerjs';
import { ADD_STREAM, MY_STREAM, ADD_REMOTE_STREAM} from './types';

// API URI 
export const API_URI = `http://10.0.0.79:5000`;

// socket config 
export const socket = IO(`${API_URI}`, {
    forceNode: true
});
socket.on('connection', () => console.log('connected client'));
socket.on('error', console.log);

// peer config
const peer = new Peer(undefined, {
    host: '10.0.0.79',
    secure: false,
    port: 5000,
    path: '/mypeer'
})
peer.on('connection', (client) => console.log('connected to peer server'))
peer.on('error', console.log);

export const joinRoom = async (stream, dispatch) => {
    // TODO: create unique room id 
    const roomID = 'uniqueRoomID';
    console.log(roomID)

    // set own stream 
    dispatch({type: MY_STREAM, payload: stream});

    // open connection to server
    peer.on('open', (userID) => {
        socket.emit('join-room', {userID, roomID})
        console.log("socket emit join room")
    })

    // connect new user
    socket.on('user-connected', (userID) => {
        connectToNewUser(userID, stream, dispatch)
        console.log("user connected")
    })

    // receive call 
    peer.on('call', (call) => {
        // answer
        call.answer(stream);
        console.log("in call")

        // stream back call 
        call.on('stream', (stream) => {
            dispatch({type: ADD_STREAM, payload: stream});
            console.log("in stream of call")
        })
    })
};

// delete this later
export const closeRoom = async (dispatch) => {
    console.log("in close room");
        // // end local video 
        // peer.on('close', (call) => {
        //     call.close();
        // })
}

export const leaveRoom = () => async (dispatch) => {
    console.log('inside leave Room')
    // peer.on('call', (call) => {
    //     // call.close()
    //     // call.on('close', () => {
    //     //     dispatch({type: ADD_REMOTE_STREAM, payload: null});
    //     //     dispatch({type: MY_STREAM, payload: null});
    //     // })
    //     console.log('inside call')
    // })
 
    peer.disconnect()
    peer.destroy()
    // dispatch({type: ADD_REMOTE_STREAM, payload: null});
        //     dispatch({type: MY_STREAM, payload: null});
}

function connectToNewUser(userID, stream, dispatch) {
    const call = peer.call(userID, stream);
    call.on('stream', (remoteVideoStream) => {
        if (remoteVideoStream) {
            dispatch({type: ADD_REMOTE_STREAM, payload: remoteVideoStream});
            console.log("add remote stream")
        }
    })
};