/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// from tutorial for call 
import {Provider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import store from './store';

const AppRedux = () => {
    return (
        <Provider {...{store}}>
            <PaperProvider>
                <App />
            </PaperProvider>
        </Provider>
    )
}

AppRegistry.registerComponent(appName, () => AppRedux);


// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);
