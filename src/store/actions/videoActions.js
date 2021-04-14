import IO from 'socket.io-client';
import Peer from 'react-native-peerjs';
import {
    ADD_STREAM, 
    ADD_REMOTE_STREAM, 
    MY_STREAM
} from './types.js';

export const API_URI = 'http://10.0.0.79:5000';

export const joinRoom = () => async(dispatch) => {};


function connectToNewUser() {}