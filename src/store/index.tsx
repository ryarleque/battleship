import { createStore, combineReducers } from 'redux';
import battleshipReducer from '../reducer/index';

const store = createStore(combineReducers({
    battleship: battleshipReducer
}));

export default store;