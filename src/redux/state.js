import profilePage_reducer from './profilePage_reducer';
import chatsPage_reducer from './chatsPage_reducer';
import sidebar_reducer from './sidebar_reducer';


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, post: 'Hi, how are you?', likeCounts:10},
                {id: 2, post: 'This is my first post here.', likeCounts:30}, 
                {id: 3, post: 'I got the job at Google', likeCounts:23}
            ],
            newPostText: ''
        },
        chatsPage: {
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
             
        },
        sidebar: {
            friendsInfo: [
                {id: 1, name: 'Bob'},
                {id: 2, name: 'John'}, 
                {id: 3, name: 'Harvey'}
            ]
        }
    },
    _callSubscriber () {
        console.log('state changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) {

        this._state.profilePage = profilePage_reducer(this._state.profilePage, action);
        this._state.chatsPage = chatsPage_reducer(this._state.chatsPage, action);
        this._state.sidebar = sidebar_reducer(this._state.sidebar, action);
        
        this._callSubscriber(this._state); 
    }
};

export default store;