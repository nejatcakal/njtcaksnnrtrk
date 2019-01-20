/** @format */

import {AppRegistry} from 'react-native';
import MyApp from './App';
import {name as appName} from './app.json';

//import react
import React from 'react';

//import provider
import { Provider } from 'react-redux';

//import the store
import configStore from './store';

const store = configStore();

const MyAppContainer = () => {
    return(
        <Provider store = { store }>
            <MyApp />
        </Provider>
    )
    
}

AppRegistry.registerComponent(appName, () => MyAppContainer);
