// External
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

// Internal
import App from './components/App/App';
import createStore from "./store/createStore"
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store = {createStore()}>
        <App />
    </Provider>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
