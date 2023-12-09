// store.js
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import charactersReducer from './reducers/reducers.js';

const store = createStore(charactersReducer, applyMiddleware(thunk));

export default store;
