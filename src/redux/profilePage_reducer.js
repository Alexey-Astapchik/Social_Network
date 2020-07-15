import {usersAPI} from '../components/API/API';

const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likeCounts:10},
        {id: 2, post: 'This is my first post here.', likeCounts:30}, 
        {id: 3, post: 'I got the job at Google', likeCounts:23}
    ],
    newPostText: '',
    profile: null,
    status: ''
}

const profilePage_reducer = (state = initialState, action) => {


    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 4,
                post: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            };
        case ADD_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText,
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
            }

        default: 
            return state;
    }
};

// Post on the main page
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (postItem) => ({type: ADD_NEW_POST_TEXT, newText: postItem});
export const setUserProfile = (profile) => ({type:SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type:SET_STATUS, status});


export const getUserProfile = (userId) => (dispatch) => {

    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
    })
}

export const getStatsus = (status) => (dispatch) => {

    usersAPI.getStatsus(status)
        .then(response => {
            if (response.date.resultCode ===  0){
                dispatch(setUserStatus(response.data))
            }
    })
}
export const updateStatsus = (status) => (dispatch) => {

    usersAPI.updateStatsus(status)
        .then(response => {
            dispatch(setUserStatus(response.data))
    })
}

export default profilePage_reducer;