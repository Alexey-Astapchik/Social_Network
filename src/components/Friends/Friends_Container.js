import React from 'react';
import { connect } from "react-redux";
import Friends from './Friends'
import { followAC, unfollowAC, setFriendsAC } from '../../redux/friends_reducer';

let mapStateToProps = (state) => {
    return {
        friends_list: state.friendsPage.friends_list,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (friendID) =>{
            let action = followAC(friendID);
            dispatch(action);
        }, 
        unfollow: (friendID) =>{
            let action = unfollowAC(friendID);
            dispatch(action);
        },
        setFriends: (users) =>{
            let action = setFriendsAC(users);
            dispatch(action);
        },
    }
}


const Friends_Container = connect(mapStateToProps, mapDispatchToProps)(Friends);

export default Friends_Container;