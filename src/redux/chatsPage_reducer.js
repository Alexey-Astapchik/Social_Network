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
    ]
     
};

const chatsPage_reducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData,{id: 8, message: body}],
            };
        default:
            return state;
    }
};

// Message in chats page
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default chatsPage_reducer;