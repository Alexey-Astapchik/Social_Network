import {authAPI} from '../components/API/API'
import { stopSubmit } from 'redux-form';
import {getAuthUserData} from './ authy_reducer';

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


export const initializeApp = () => ({ type: SET_INITIALIZE});


export const initialize = () => (dispatch) => {
    
    let promise = dispatch(getAuthUserData());

    Promise.all([promise])
        .then(() => {
        dispatch(initializeApp());
    })

}

export default app_reducer;