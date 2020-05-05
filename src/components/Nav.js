import React from 'react';


const Nav = () => {
    return (
        <nav className="nav">
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Chats</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Feed</a>
        </div>
        <div className='settings'>
          <a>Settings</a>
        </div>
      </nav>
    )
}

export default Nav;