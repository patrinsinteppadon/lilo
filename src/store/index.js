import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const middleware = [thunk];

// reducer roots
import rootReducer  from './reducer';
const initialState = {};

// create store 
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

export default store;