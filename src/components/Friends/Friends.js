import React from 'react'

import '../Friends/Friends.css';
import Axios, * as axios from 'axios';
import { render } from '@testing-library/react';

export default class Friends extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setFriends(response.data.items);
            })
    }
    
    render () {

        let numberOfPages = this.props.totalUsersCount / this.props.pageSize

        let pages = [];

        for (let i = 1; i < numberOfPages; i++){
            pages.push(i);
        }

        return <div className="content_friends"> 
        {   
                this.props.friends_list.map( f => <div className='card friend_card' key={f.id}>
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
            {pages.map( p => {
               return <span className={this.props.currentPage === p && 'selected'}>{p}</span>
            })}
            
            {/* <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span> */}
        </div>
    </div>
    }
}
