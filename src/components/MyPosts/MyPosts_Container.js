import React from 'react';
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profilePage_reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';



// const MyPosts_Container = (props) => {

//     return <StoreContext.Consumer>
//                 {   store => {
//                     let state = props.store.getState();

//                     let onAddPost = () => { 
//                         props.store.dispatch(addPostActionCreator());
//                     };
    
//                     let onPostChange = (postItem) => {
//                         let action = updateNewPostActionCreator(postItem);
//                         props.store.dispatch(action);
//                     };  
//                 return(
//                     <MyPosts 
//                         updateNewPostText={onPostChange} 
//                         addPost={onAddPost} 
//                         postsData={state.profilePage.postsData}   
//                         newPostText={state.profilePage.newPostText}/>
//                 )
//                 } }            
//             </StoreContext.Consumer>
    
// };

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