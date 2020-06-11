const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    friends_list: [
        {id: 1, followed: false, friend_name: 'Markus', mutual_friends:'Mutual friends', location: {city:'Berlin', country: 'Germany'}},
        {id: 2, followed: true, friend_name: 'Bob', mutual_friends:'Mutual friends', location: {city:'New York', country: 'USA'}},
        {id: 3, followed: false, friend_name: 'Jessica', mutual_friends:'Mutual friends', location: {city:"Paris", country: "France"}},
    ]
}

const friends_reducer = (state = initialState, action) => {


    switch(action.type){
        case FOLLOW:
            return {
                ...state, 
                friends_list: state.friends_list.map(f => {
                    if(f.id === action.friendID){
                        return {...f, followed: true}
                    }
                    return f;
                })
            }

        case UNFOLLOW:
            return {
                ...state, 
                friends_list: state.friends_list.map(f => {
                    if(f.id === action.friendID){
                        return {...f, followed: false}
                    }
                    return f;
                })
            }

        case SET_USERS:
            return {...state, friends_list: [...state.friends_list, ...action.friends]}    

        default: 
            return state;
    }
};

// Post on the main page
export const followAC = (friendID) => ({ type: FOLLOW, friendID });
export const unfollowAC = (friendID) => ({ type: UNFOLLOW, friendID });
export const setFriendsAC = (friends) => ({ type: SET_USERS, friends });

export default friends_reducer;