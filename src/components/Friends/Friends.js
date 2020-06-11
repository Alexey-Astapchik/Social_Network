import React from 'react'

import '../Friends/Friends.css';

const Friends = (props) => {

    if(props.friends_list.length === 0){
        props.setFriends({ friends: [
            {id: 1, followed: false, friend_name: 'Markus', mutual_friends:'Mutual friends', location: {city:'Berlin', country: 'Germany'}},
            {id: 2, followed: true, friend_name: 'Bob', mutual_friends:'Mutual friends', location: {city:'New York', country: 'USA'}},
            {id: 3, followed: false, friend_name: 'Jessica', mutual_friends:'Mutual friends', location: {city:"Paris", country: "France"}},
            ]
        })
    };
    
    return <div className="content_friends"> 
        {   
                props.friends_list.map( f => <div className='card friend_card' key={f.id}>
                        <div className='friend_logo'>
                        </div>
                        <div className='friends_info'>
                            <p>{f.friend_name}</p>
                            <p>{f.mutual_friends}</p>
                            <p>
                                City: {f.location.city}
                            </p>
                            <p>Country: {f.location.country}</p>
                        </div>
                        <div className='btn_toFollow'>
                            { f.followed 
                            ? <button href='#' onClick={ () => { props.unfollow(f.id) }} 
                                className='btn btn_follow'>Unfollow</button>
                            : <button href='#' onClick={ () => { props.follow(f.id) }} 
                                className='btn btn_follow'>Follow</button> 
                            }
                        </div>
                    </div>
                )
        }
    </div>
}

export default Friends;