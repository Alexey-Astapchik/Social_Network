import React from 'react';
import { NavLink } from 'react-router-dom';

import '../DialogueItem/DialogueItem.css'

const DialogueItem = (props) => {
    let path = "/Chats/" + props.id;
    return (
        <div className="user_item">
            
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogueItem;