import IO from 'socket.io-client';
import Peer from 'react-native-peerjs';
import { ADD_STREAM, MY_STREAM, ADD_REMOTE_STREAM} from './types';

// API URI 
export const API_URI = `http://10.0.0.79:5000`;

// socket config 
export const socket = IO(`${API_URI}`, {
    forceNew: true
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
peer.on('error', console.log);

export const joinRoom = (stream) =>  async (dispatch) => {
    // TODO: create unique room id 
    const roomID = 'uniqueRoomID';
    console.log(roomID)

    // set own stream 
    dispatch({type: MY_STREAM, payload: stream});

    // open connection to server
    peer.on('open', (userID) => {
        socket.emit('join-room', {userID, roomID})
    })

    // connect new user
    socket.on('user-connected', (userID) => {
        connectToNewUser(userID, stream, dispatch)
    })

    // receive call 
    peer.on('call', (call) => {
        // answer
        call.answer(stream);

        // stream back call 
        call.on('stream', (stream) => {
            dispatch({type: ADD_STREAM, payload: stream});
        })
    })
};

function connectToNewUser(userID, stream, dispatch) {
    const call = peer.call(userID, stream);
    call.on('stream', (remoteVideoStream) => {
        if (remoteVideoStream) {
            dispatch({type: ADD_REMOTE_STREAM, payload: remoteVideoStream});
        }
    })
};