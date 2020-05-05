import React from 'react';


const Profile = () => {
    return (
        <div className="content">
        <div>
          <img></img>
          <div></div>
        </div>
        <div className='posts'>
          <div>
            My posts
          </div>
          <input placeholder="Write a post..."></input>
          <a href="#">Send</a>
        </div>
      </div>
    )
}

export default Profile;