import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profilePage_reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText,
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (postItem) => {
            let action = updateNewPostActionCreator(postItem);
            dispatch(action);
        },
        addPost: () => {
           dispatch(addPostActionCreator());
        }
    }
};

const MyPosts_Container = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPosts_Container;