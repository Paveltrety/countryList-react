import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import dataReducer from './dataReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    data: dataReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;