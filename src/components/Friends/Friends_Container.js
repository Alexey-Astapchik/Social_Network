import React from 'react';
import { connect } from "react-redux";
// import FriendsAPIComponent from './FriendsAPIComponent'
import { followAC, unfollowAC, setFriendsAC, setCurrentPageAC, setTotalFriendsCountAC, setIsFetchingAC } from '../../redux/friends_reducer';
import * as axios from 'axios';
import { render } from '@testing-library/react';
import Friends from './Friends';
// import loader from './Friends/loader/loader.svg';
import Loader from '../Loader/Loader';
import {usersAPI} from '../API/API';

class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching( true );
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setFriends(data.items)
                // this.props.toggleIsFetching(false)
                // this.props.setTotalFriendsCount(response.data.totalCount);
            });
    }

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        // this.props.toggleIsFetching( true );
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.setFriends(data.items);
                // this.props.toggleIsFetching(false);
            })
    }
    
    render() {
        return  <>
                {this.props.isFetching ? <Loader/> : null}
                    <Friends totalUsersCount = {this.props.totalUsersCount}
                            pageSize={this.props.pageSize} 
                            currentPage = {this.props.currentPage}
                            onChangePage={this.onChangePage}
                            users={this.props.users}
                            follow={this.props.follow}
                            unfollow={this.props.unfollow}
                    />
                </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.friendsPage.users,
        pageSize: state.friendsPage.pageSize,
        totalUsersCount: state.friendsPage.totalUsersCount,
        currentPage: state.friendsPage.currentPage,
        isFetching: state.friendsPage.isFetching
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
        setCurrentPage: (pageNumber) => {
            let action = setCurrentPageAC(pageNumber);
            dispatch(action);
        },
        // setTotalFriendsCount: (totalCount) => {
        //     let action = setTotalFriendsCountAC(totalCount);
        //     dispatch(action);
        // }
        // toggleIsFetching: (isFetching) => {
        //     let action = setIsFetchingAC(isFetching);
        //     dispatch(action);
        // }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(FriendsAPIComponent);