import React from 'react';

import MyPosts_Container from '../MyPosts/MyPosts_Container';
import ProfileItem from '../Profile/ProfileItem/ProfileItem'

import '../Profile/Profile.css';
import store from '../../redux/redux-store';
import {Redirect} from 'react-router-dom'


const Profile = (props) => {
  
    return (
      <div className="content">
        <ProfileItem profile={props.profile} status={props.status} updateStatus= {props.updateStatus} />
        <MyPosts_Container store={store} />
      </div>
    )
}

export default Profile;

