const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 30,
    currentPage: 1,  
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

        default: 
            return state;
    }
};

// Post on the main page
export const followAC = (friendID) => ({ type: FOLLOW, friendID });
export const unfollowAC = (friendID) => ({ type: UNFOLLOW, friendID });
export const setFriendsAC = (users) => ({ type: SET_USERS, users });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalFriendsCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount });


export default friends_reducer;