// External
import React from 'react'
import ReactDOM from 'react-dom'
import { StoreContext } from 'redux-react-hook'

// Internal
import App from './components/App/App'
import configureStore from './store/configureStore'
import * as serviceWorker from './serviceWorker'
import './index.scss'

ReactDOM.render(
    <StoreContext.Provider value={configureStore()}>
        <App />
    </StoreContext.Provider>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
