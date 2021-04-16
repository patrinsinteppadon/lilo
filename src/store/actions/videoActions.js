import IO from 'socket.io-client';
import Peer from 'react-native-peerjs';
import {
    ADD_STREAM, 
    ADD_REMOTE_STREAM, 
    MY_STREAM
} from './types.js';

// export const API_URI = 'http://10.0.0.79:5001';
export const API_URI = 'http://127.0.0.1:5001';

export const socket = IO(`${API_URI}`, {
    forceNew: true
})
socket.on('connection', () => console.log('Connected client'))

const peerServer = new Peer(undefined, {
    host: 'http://127.0.0.1',
    secure: false, 
    path: "/mypeer"
})
peerServer.on('error', console.log)
peerServer.on('error', () => console.log('ERROOOOOORRRRR:'))

export const joinRoom = (stream) => async(dispatch) => {
    // set this to be a random room ID
    const roomID = "uniqueRoomID"

    console.log("HELLOOOOOOOOOOO")
    console.log(roomID);

    // set own stream 
    dispatch({type: MY_STREAM, payload: stream})

    // open a connection to server
    peerServer.on('open', (userID) => {
        socket.emit('join-room', {userID, roomID});
    })

    // add other users (populate streams of remote users)
    socket.on('user-connected', (userID) => {
        connectToNewUser(userID, stream, dispatch)
    })

    // receive a call 
    peerServer.on('call', (call) => {
        call.answer(stream)
        call.on('stream', (stream) => {
            dispatch({type: ADD_STREAM, payload: stream})
        })
    })
};


function connectToNewUser(userID, stream, dispatch) {
    const call = peerServer.call(userID, stream)
    call.on('stream', (remoteStream) => {
        if (remoteStream) {
            dispatch({type: ADD_REMOTE_STREAM, payload: remoteStream})
        }
    })
}