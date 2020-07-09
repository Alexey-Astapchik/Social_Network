import React from 'react'

import { NavLink } from 'react-router-dom'
import '../Friends/Friends.css'
import Axios, * as axios from 'axios';

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

                        ? <button href='#' onClick={ () => { 

                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'b1175b2f-c3a5-4509-8dc9-90b5629de7c3'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.unfollow(f.id) 
                                        }
                                    })
                            }}  className='btn btn_follow'>Unfollow</button>

                        : <button href='#' onClick={ () => { 

                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${f.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': 'b1175b2f-c3a5-4509-8dc9-90b5629de7c3'
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0){
                                            props.follow(f.id) 
                                        }
                                    })
                            }} className='btn btn_follow'>Follow</button> 
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