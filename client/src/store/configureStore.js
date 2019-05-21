import { createStore } from 'redux'
import rootReducer from '../reducers/rootReducer'

const configureStore = (initialState = {}) =>
    createStore(
        rootReducer,
        initialState,
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export default configureStore
