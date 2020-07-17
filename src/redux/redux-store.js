import { createStore, combineReducers, applyMiddleware } from "redux";
import profilePage_reducer from './profilePage_reducer';
import chatsPage_reducer from './chatsPage_reducer';
import sidebar_reducer from './sidebar_reducer';
import friends_reducer from "./friends_reducer";
import authy_reducer from './ authy_reducer'
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form' 

let reducers = combineReducers({
    profilePage: profilePage_reducer,
    chatsPage: chatsPage_reducer, 
    friendsPage: friends_reducer,
    auth: authy_reducer,
    form: formReducer
    // sidebar: sidebar_reducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware)); 

window.store = store;

export default store;