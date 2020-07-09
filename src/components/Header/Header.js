import React from 'react';

import '../Header/Header.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
      <header className="header">
        <div className='header_login'>
          {props.isAuth ? props.login
            : <NavLink to={'/Login'} className="login_btn"><img src="https://img.icons8.com/plasticine/100/000000/enter-2.png"/></NavLink>
          }
        </div>
      </header>
    )
}

export default Header; 