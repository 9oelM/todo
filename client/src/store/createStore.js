import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer';

const configureStore = (initialState={}) => 
    createStore(
        rootReducer,
        initialState,
    )

export default configureStore