import React from 'react'
import '../Chats/Chats.css';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/chatsPage_reducer';
import Chats from './Chats';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        chatsPage: state.chatsPage,
        isAuth: state.auth.isAuth,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {    
        updateDisplayMessage: (body) => {
            dispatch(updateMessageBodyCreator(body));
        },
        onSendMessage: () => {
            dispatch(sendMessageCreator());
        },
    }
}


const Chats_Container = connect(mapStateToProps, mapDispatchToProps)(Chats);

export default Chats_Container;