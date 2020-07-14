import {usersAPI} from '../components/API/API';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE_FOLLOWING_PROGRESS';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,  
    followingInProgress: [],
    isFetching: true
}

const friends_reducer = (state = initialState, action) => {


    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                users: state.users.map(f => {
                    if(f.id === action.friendID){
                        return {...f, followed: true}
                    }
                    return f;
                })
            }

        case UNFOLLOW:
            return {
                ...state, 
                users: state.users.map(f => {
                    if(f.id === action.friendID){
                        return {...f, followed: false}
                    }
                    return f;
                })
            }

        case SET_USERS:{
            return { ...state, users: action.users }  
        }
            
        case SET_CURRENT_PAGE:{
            return {...state, currentPage: action.currentPage}  
        }
        
        // case SET_TOTAL_USERS_COUNT:
        //         return {...state, totalUsersCount: action.count}  

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }

        case TOGGLE_FOLLOWING_PROGRESS:{
            return {
                ...state, 
                followingInProgress: action.isFetching 
                ? [...state.followingInProgress, action.friendID]
                : state.followingInProgress.filter(id => id != action.friendID)
            }
        }

        default: 
            return state;
    }
};

export const followSuccess = (friendID) => ({ type: FOLLOW, friendID });
export const unfollowSuccess = (friendID) => ({ type: UNFOLLOW, friendID });
export const setFriends = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalFriendsCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });
export const toggleFollowingProgress = (isFetching, friendID) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, friendID});
export const toggleIsFetching = (isFetching) => ({type:TOGGLE_IS_FETCHING, isFetching})


// These functions are a thunk!!!
export const getUsers = (currentPage, pageSize) => {
    return  (dispatch) => {

        dispatch(toggleIsFetching( true ));

            usersAPI.getUsers(currentPage, pageSize).then(data => {
                    dispatch(setFriends(data.items));
                    dispatch(toggleIsFetching( false ));
                    // this.props.setTotalFriendsCount(response.data.totalCount);
            });
    }
}

export const follow = (friendID) => {

    return  (dispatch) => { 
        dispatch(toggleFollowingProgress(true, friendID))
            usersAPI.follow(friendID) 
                .then(response => {
                    if (response.data.resultCode == 0){
                        dispatch(follow(friendID))
                }
            dispatch(toggleFollowingProgress(false, friendID))
        })
    }
}

export const unfollow = (friendID) => {

    return  (dispatch) => { 
        dispatch(toggleFollowingProgress(true, friendID))
            usersAPI.unfollow(friendID) 
                .then(response => {
                    if (response.data.resultCode == 0){
                        dispatch(follow(friendID))
                }
            dispatch(toggleFollowingProgress(false, friendID))
        })
    }
}

export default friends_reducer;