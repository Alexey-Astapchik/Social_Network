const ADD_NEW_MESSAGE_TEXT = 'ADD-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';


let initialState = {
    chatsData: [
        {id: 1, name: 'John'},
        {id: 2, name: 'Bob'}, 
        {id: 3, name: 'Harvey'},
        {id: 4, name: 'Mike'},
        {id: 5, name: 'Robin'},
        {id: 6, name: 'Mary'}
    ],
    messagesData:[
        {id: 1, message: 'Hey! How a u doing?'},
        {id: 2, message: 'Do u remember today we have a meeting?'}, 
        {id: 3, message: 'Have you talked to her?'},
        {id: 4, message: "Wooow!! How was it? You're mad man ;))"},
        {id: 5, message: 'So, what did he tell you?'},
        {id: 6, message: 'A u ready for this exam? I spent the whole night, but... still nothing'}
    ],
    newMessageText: ''
     
};

const chatsPage_reducer = (state = initialState, action) => {

    if(action.type === ADD_NEW_MESSAGE_TEXT){
        state.newMessageText = action.body;
    } else if(action.type === SEND_MESSAGE){
        let body = state.newMessageText;
        state.newMessageText = '';
        state.messagesData.push( {id: 6, message: body} );
    }

    return state;
};

// Message in chats page
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateMessageBodyCreator = (body) => ({type: ADD_NEW_MESSAGE_TEXT, body: body});

export default chatsPage_reducer;