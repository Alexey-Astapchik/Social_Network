import React from 'react';

import MyPosts from '../MyPosts/MyPosts';
import ProfileItem from '../Profile/ProfileItem/ProfileItem'

import '../Profile/Profile.css';


const Profile = (props) => {

    return (
      <div className="content">
        <ProfileItem />
        <MyPosts 
          postsData={props.state.postsData} 
          newPostText={props.state.newPostText}
          dispatch={ props.dispatch }
        />
      </div>
    )
}

export default Profile;

