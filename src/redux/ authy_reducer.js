import {authAPI} from '../components/API/API'
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: true
}

const authy_reducer = (state = initialState, action) => {

    switch(action.type){
        case SET_USER_DATA:
            return {
                ...state, 
                ...action.data,
                isAuth: true
            }
        default: 
            return state;
    }
};


export const setAuthUserDataAC = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, data: {userId, email, login, isAuth}});


export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0){
                    let { id, login, email } =  response.data.data;
                    dispatch(setAuthUserDataAC(id. email, login, true));                  
                } 
            })
}


export const login = (email, password, rememberMe) => (dispatch) => {

        authAPI.login(email, password, rememberMe)
                .then(response => {
                    if (response.data.resultCode === 0){
                        dispatch(getAuthUserData());                  
                    } else {
                        let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                        dispatch(stopSubmit('login', {email: 'Email is wrong'}))
                    }
                })
}

export const logout = () => (dispatch) => {
    authAPI.logout() 
        .then(response => {
            if (response.data.resultCode === 0){
                dispatch(setAuthUserDataAC(null, null, null, false));                 
            }
        })
}


export default authy_reducer;