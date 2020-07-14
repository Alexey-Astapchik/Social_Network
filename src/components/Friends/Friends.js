import React from 'react'

import { NavLink } from 'react-router-dom'
import '../Friends/Friends.css'
import Axios, * as axios from 'axios';
import {usersAPI} from '../../components/API/API'


let Friends = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

    return <div className="content_friends"> 
    {   
            props.users.map( f => <div className='card friend_card' key={f.id}>

                <NavLink to={'/Profile/' + f.id} className='friend_logo'>
                </NavLink>
                    
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

                        ? <button disabled={props.followingInProgress.some(id => id === f.id)} onClick={ () => { 
                                props.unfollow(f.id) }} className='btn btn_follow'>
                            Unfollow</button>

                        : <button disabled={props.followingInProgress.some(id=> id === f.id)} onClick={ () => { 
                                props.follow(f.id) }} className='btn btn_follow'>
                            Follow</button> 
                        }
                    </div>
                </div>
            )
    }
    <div className='selectedPage'>
        { pages.map( p => {
           return <nav aria-label="Page navigation example">
                    <ul className="pagination pag">
                        <li className={props.currentPage === p && 'selected'}
                            onClick={ (e) => { 
                                props.onChangePage(p); }}><a className="page-link">{p}</a>
                        </li>
                    </ul>
                </nav>
        })}
    </div>
</div>

}   

export default Friends;