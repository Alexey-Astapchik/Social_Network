import React from 'react'

import '../Chats/Chats.css';
import { NavLink, Redirect } from 'react-router-dom';
import DialogueItem from '../Chats/DialogueItem/DialogueItem'
import MessageItem from '../Chats/MessageItem/MessageItem';
import { sendMessageCreator} from '../../redux/chatsPage_reducer';
import {Field,reduxForm} from 'redux-form'

const Chats = (props) => {
  
    let state = props.chatsPage;

    let chatsEl = state.chatsData.map( u =>  <DialogueItem name={u.name}  id={u.id} /> )     
    let messageEl = state.messagesData.map( m => <MessageItem message={m.message} /> )
    let newMessageBody = state.newMessageBody;



    let addNewMessage = (value) => {
        props.onSendMessage(value.newMessageBody);
    }

    if (!props.isAuth) return <Redirect to={ './Login' }/>
    

    return (
        <div className="content_chats">
            <div className="dialogues">
                <div className='message_window'>
                    <AddMessageReduxForm  onSubmit={addNewMessage}/>
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

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                < Field
                    className="mes_inp form-control"                     
                    placeholder='Write your message...'
                    name={'newMessageBody'}    
                    component={'input'}
                />
            </div>
            <div>
                <button className="mes_btn">
                        <img src="https://img.icons8.com/color/48/000000/filled-sent.png"/>
                        Send
                </button>
            </div>
        </form>
    )
}


const AddMessageReduxForm = reduxForm({form: 'chatAddMessageForm'})(AddMessageForm)

export default Chats;