import React from 'react'

import '../Chats/Chats.css';
import { NavLink } from 'react-router-dom';
import DialogueItem from '../Chats/DialogueItem/DialogueItem'
import MessageItem from '../Chats/MessageItem/MessageItem';
import { updateMessageBodyCreator, sendMessageCreator} from '../../redux/chatsPage_reducer';
import Chats from './Chats'
import { connect } from 'react-redux';

// const Chats_Container = (props) => {

//     return  <StoreContext.Consumer>
//                 {   store => {
//                     let sendMessage = () => {
//                         props.store.dispatch(sendMessageCreator());
//                     };

//                     let displayNewMessage = (body) => {
//                         props.store.dispatch(updateMessageBodyCreator(body));
//                     };

//                 return <Chats updateDisplayMessage={displayNewMessage} 
//                         onSendMessage={sendMessage} 
//                         chatsPage={props.store.getState().chatsPage}/>
//                 } 
//             }
//             </StoreContext.Consumer>
// }


let mapStateToProps = (state) => {
    return {
        chatsPage: state.chatsPage,
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