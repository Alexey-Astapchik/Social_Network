import React from 'react'

import '../ProfileItem/ProfileItem.css'

const ProfileItem = (props) => {
    return (
      <div className='user_profile'>
        <div>
          <div className="profile__avatar">
          </div>
          </div>
          <div className='user__name'>
          <p>Name: Alex Bachman</p>
          <p>Number: +345 23 8690 000 90</p>
          <p>Date of birth: 29.02.1929 </p>
        </div>
      </div>
    )
}

export default ProfileItem;