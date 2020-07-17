import React from 'react'
import '../Chats/Chats.css';
import { sendMessageCreator} from '../../redux/chatsPage_reducer';
import Chats from './Chats';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom'
import withAuthRedirect from '../HOC/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        chatsPage: state.chatsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {    
        onSendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Chats);