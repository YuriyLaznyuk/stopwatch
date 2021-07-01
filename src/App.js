
import React from 'react';
import './style/app.scss'
import StopWatch from "./component/StopWatch";
import {Provider} from "react-redux";
import {store} from '../src/component/store/index'

function App(props) {
    return (
        <Provider store={store}>
            <h1>Test StopWatch</h1>
            <StopWatch/>
        </Provider>
    );
}

export default App;