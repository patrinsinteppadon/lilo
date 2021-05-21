import { MY_STREAM, ADD_STREAM, ADD_REMOTE_STREAM } from '../actions/types';

const initialState = {
    myStream: null,
    streams: [],
    remoteStream: null,
};

export default (state = initialState, {type, payload}) => {
    switch(type) {
        case MY_STREAM: 
            return {
                ...state,
                myStream: payload,
            }
        case ADD_STREAM: 
            return {
                ...state, 
                streams: [...state.streams, payload],
            }
        case ADD_REMOTE_STREAM:
            return {
                ...state, 
                remoteStream: payload,
            }
        default: return state;
    }
}