import React from 'react'

import '../Friends/Friends.css';
import Axios, * as axios from 'axios';
import { render } from '@testing-library/react';

export default class Friends extends React.Component {

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
                    this.props.setFriends(response.data.items);
            })
    }
    
    render () {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div className="content_friends"> 
        {   
                this.props.users.map( f => <div className='card friend_card' key={f.id}>
                        <div className='friend_logo'>
                        </div>
                        <div className='friends_info'>
                            <p>{f.name}</p>
                            <p>{f.status}</p>
                            <p>
                                City: {"f.location.city"}
                            </p>
                            <p>Country: {"f.location.country"}</p>
                        </div>
                        <div className='btn_toFollow'>
                            { f.followed 
                            ? <button href='#' onClick={ () => { this.props.unfollow(f.id) }} 
                                className='btn btn_follow'>Unfollow</button>
                            : <button href='#' onClick={ () => { this.props.follow(f.id) }} 
                                className='btn btn_follow'>Follow</button> 
                            }
                        </div>
                    </div>
                )
        }
        <div className='selectedPage'>
            { pages.map( p => {
               return <span className={this.props.currentPage === p && 'selected'}
                onClick={ (e) => { this.onChangePage(p); }  }>{p}</span>
            })}
        </div>
    </div>
    }
}
