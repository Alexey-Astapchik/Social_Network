import React from 'react'

import '../FriendsInfo/FriendsInfo.css'

const FriendsInfo = (props) => {
    return (
        <div className="friends">
            <div className="friends_item">
                <div className='photo'></div>
                <p>{ props.name }</p>
            </div>
        </div>
    )
}

export default FriendsInfo;