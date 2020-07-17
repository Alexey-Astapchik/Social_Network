import {usersAPI, profileAPI} from '../components/API/API';

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likeCounts:10},
        {id: 2, post: 'This is my first post here.', likeCounts:30}, 
        {id: 3, post: 'I got the job at Google', likeCounts:23}
    ],
    profile: null,
    status: "", 
}

const profilePage_reducer = (state = initialState, action) => {


    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 4,
                post: action.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status 
            };  

        default: 
            return state;
    }
};

// Post on the main page
export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type:SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
    })
};

export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
    })
};

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            // if (response.date.resultCode ===  0) {
                dispatch(setStatus(status))
            // }
        })  
};



export default profilePage_reducer;