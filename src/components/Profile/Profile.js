import React from 'react';

import MyPosts_Container from '../MyPosts/MyPosts_Container';
import ProfileItem from '../Profile/ProfileItem/ProfileItem'

import '../Profile/Profile.css';
import store from '../../redux/redux-store';


const Profile = (props) => {

    return (
      <div className="content">
        <ProfileItem profile={props.profile}/>
        <MyPosts_Container store={store} />
      </div>
    )
}

export default Profile;

