import {authAPI} from '../components/API/API'
import { stopSubmit } from 'redux-form';

const SET_INITIALIZE = 'SET_INITIALIZE';


let initialState = {
    initialized: false
}

const app_reducer = (state = initialState, action) => {

    switch(action.type){
        case SET_INITIALIZE:
            return {
                ...state,
                initialized: true
            }
        default: 
            return state;
    }
};


export const initializationApp = () => ({ type: SET_INITIALIZE}});


export const initialize = () => (dispatch) => {
    
}

export default app_reducer;