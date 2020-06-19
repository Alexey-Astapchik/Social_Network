import React from 'react'
import '../Friends/Friends.css';
import Axios, * as axios from 'axios';
import { render } from '@testing-library/react';
import Friends from './Friends';



export default class FriendsAPIComponent extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items);
                    // this.props.setTotalFriendsCount(response.data.totalCount);
            })
    };

    onChangePage = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setFriends(response.data.items)
            });
    }
    
    render() {
        return <Friends totalUsersCount = {this.props.totalUsersCount}
                        pageSize={this.props.pageSize} 
                        currentPage = {this.props.currentPage}
                        onChangePage={this.onChangePage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unfollow={this.props.unfollow}
                />
    }
}
