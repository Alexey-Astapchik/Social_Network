const ADD_POST = 'ADD-POST';
const ADD_NEW_POST_TEXT = 'ADD-NEW-POST-TEXT';

let initialState = {
    postsData: [
        {id: 1, post: 'Hi, how are you?', likeCounts:10},
        {id: 2, post: 'This is my first post here.', likeCounts:30}, 
        {id: 3, post: 'I got the job at Google', likeCounts:23}
    ],
    newPostText: ''
}

const profilePage_reducer = (state = initialState, action) => {


    switch(action.type){
        case ADD_POST: 
            let newPost = {
                id: 4,
                post: state.newPostText,
                likeCounts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }
        case ADD_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText,
            };
        default: 
            return state;
    }
};

// Post on the main page
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostActionCreator = (postItem) => ({type: ADD_NEW_POST_TEXT, newText: postItem});

export default profilePage_reducer;