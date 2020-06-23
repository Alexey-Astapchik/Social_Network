import React from 'react';

import MyPosts_Container from '../MyPosts/MyPosts_Container';
import ProfileItem from '../Profile/ProfileItem/ProfileItem'

import '../Profile/Profile.css';
import store from '../../redux/redux-store';
import Profile from './Profile'

class Profile_Container extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(response => {
                    this.props.setFriends(response.data.items)
            })
    }

    render(){
        return (
            <div className="content">
              <Profile {...this.props} />
            </div>
          )
    }
    
}

export default Profile_Container;

