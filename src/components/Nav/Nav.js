import React from 'react';

import styleEl from '../Nav/Nav.css';
import { NavLink } from 'react-router-dom';
import FriendsInfo from '../Nav/FriendsInfo/FriendsInfo'

const Nav = (props) => {
  
  // let friendsItem = props.sidebar.friendsInfo.map( f => <FriendsInfo name={f.name}/> );

    return (
        <nav className="nav">
        <div className='naveItem'>
          <NavLink to="/Profile" className="profile" activeClassName={styleEl.active}><img src="https://img.icons8.com/color/48/000000/head-profile.png"/>My profile</NavLink>
        </div>
        <div className='naveItem'>
          <NavLink to="/Chats" className="chat" activeClassName={styleEl.active}><img src="https://img.icons8.com/color/48/000000/filled-chat.png"/>Chats</NavLink>
        </div>
        <div className='naveItem'>
          <NavLink to="/Friends" className="friends" activeClassName={styleEl.active}><img  src="https://img.icons8.com/color/48/000000/friends.png"/>My friends</NavLink>
        </div>
        <div className='naveItem'>
          <NavLink to="/Feed" className="feed" activeClassName={styleEl.active}><img src="https://img.icons8.com/color/48/000000/activity-feed-2.png"/>My feed</NavLink>
        </div>
        <div className='settings'>
          <NavLink to="/Settings" activeClassName={styleEl.active}><img src="https://img.icons8.com/color/48/000000/settings.png"/>Settings</NavLink>
        </div>

        <div className='FriendsInfo'>
          <div className="contacts">
            <p>Contacs</p>
          </div>
          {/* { friendsItem } */}
          <FriendsInfo/>
        </div>
      </nav>
    )
}

export default Nav;