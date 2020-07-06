import React from 'react';

import Loader from '../../Loader/Loader';
import '../ProfileItem/ProfileItem.css';

const ProfileItem = (props) => {

  if (!props.profile) {
    return <Loader />
  }

    return (
      <div className='user_profile'>
        <div>
          <div className="profile__avatar">
          </div>
          </div>
          <div className='user__name'>
          <p>Name: {`${props.profile.fullName}`}</p>
          <p>Contacs: {`${props.profile.contacts.github}`}</p>
          <p>Job: {`${props.profile.lookingForAJobDescription}`}</p>
          <p>Date of birth: 29.02.1929 </p>
        </div>
      </div>
    )
}

export default ProfileItem;