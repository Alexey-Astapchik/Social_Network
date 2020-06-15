const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    friends_list: [
        // {id: 1, followed: false, name: 'Markus', status:'Mutual friends', location: {city:'Berlin', country: 'Germany'}},
        // {id: 2, followed: true, name: 'Bob', status:'Mutual friends', location: {city:'New York', country: 'USA'}},
        // {id: 3, followed: false, name: 'Jessica', status:'Mutual friends', location: {city:"Paris", country: "France"}},
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
            return {...state, friends_list: [...state.friends_list, ...action.users]}    

        default: 
            return state;
    }
};

// Post on the main page
export const followAC = (friendID) => ({ type: FOLLOW, friendID });
export const unfollowAC = (friendID) => ({ type: UNFOLLOW, friendID });
export const setFriendsAC = (users) => ({ type: SET_USERS, users });

export default friends_reducer;