import React from 'react'

import '../Chats/Chats.css';
import { NavLink } from 'react-router-dom';
import DialogueItem from '../Chats/DialogueItem/DialogueItem'
import MessageItem from '../Chats/MessageItem/MessageItem';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/chatsPage_reducer';

const Chats = (props) => {

    let chatsEl = props.state.chatsData.map( u =>  <DialogueItem name={u.name} id={u.id} /> )     
    let messageEl = props.state.messagesData.map( m => <MessageItem message={m.message} /> )
    let newMessageText = props.state.newMessageText;

    let sendMessage = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let displayNewMessage = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateMessageBodyCreator(body));
    }

    return (
        <div className="content_chats">
            <div className="dialogues">
                <div className='message_window'>
                    <div>
                        <input className="mes_inp form-control" 
                            value={ newMessageText }
                            onChange={ displayNewMessage }
                            placeholder='Aa'>    
                        </input>
                    </div>
                    <div>
                        <button href='#'
                            onClick={ sendMessage } 
                            className="mes_btn">
                            <img src="https://img.icons8.com/color/48/000000/filled-sent.png"/>
                            Send
                        </button>
                    </div>
                </div>
                <div className="userNames">
                    { chatsEl }
                </div>
                <div className="messages">
                    <div> { messageEl } </div>
                </div>
            </div>
        </div>
    )
}

export default Chats;