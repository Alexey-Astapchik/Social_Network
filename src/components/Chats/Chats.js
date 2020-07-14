import React from 'react'

import '../Chats/Chats.css';
import { NavLink, Redirect } from 'react-router-dom';
import DialogueItem from '../Chats/DialogueItem/DialogueItem'
import MessageItem from '../Chats/MessageItem/MessageItem';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/chatsPage_reducer';

const Chats = (props) => {
  
    let state = props.chatsPage;

    let chatsEl = state.chatsData.map( u =>  <DialogueItem name={u.name} id={u.id} /> )     
    let messageEl = state.messagesData.map( m => <MessageItem message={m.message} /> )
    let newMessageText = state.newMessageText;

    let sendMessage = () => {
        props.onSendMessage();
    }

    let displayNewMessage = (e) => {
        let body = e.target.value;
        props.updateDisplayMessage(body);
    }

    if (!props.isAuth) return <Redirect to={'./Login'}/>
    

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