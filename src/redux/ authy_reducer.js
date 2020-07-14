import {authAPI} from '../components/API/API'

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
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


export const setAuthUserDataAC = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login}});


export const getAuthUserData = () => (dispatch) => {
    authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0){
                    let {id, email, login} =  response.data.data;
                    dispatch(setAuthUserDataAC(id. email, login));                  
                } 
            })
}


export default authy_reducer;