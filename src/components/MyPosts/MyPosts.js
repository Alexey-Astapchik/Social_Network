import React from 'react';
import Post from '../Post/Post';

import '../MyPosts/MyPosts.css'
import {addPostActionCreator, updateNewPostActionCreator} from '../../redux/profilePage_reducer'

const MyPosts = (props) => {

  let postElement = props.postsData.map( p =>  <Post message={p.post} likeCounts={p.likeCounts}/> );

  let newPostItem = React.createRef();

  let addPost = () => { 
    props.dispatch(addPostActionCreator());
  }

  let onPostChange = () => {
    let postItem = newPostItem.current.value;
    let action = updateNewPostActionCreator(postItem);
    props.dispatch(action);
  }

    return (
        <div>
          <div className='posts'>
              <div className="postLogo">
                <p>My posts</p>
              </div>
              <input type="email" 
                ref={newPostItem} 
                className="inp form-control" 
                id="exampleInputEmail1" 
                placeholder="Write a post..." 
                aria-describedby="emailHelp"
                onChange={ onPostChange }
                value={ props.newPostText }
              >
              </input>
              <div className='btns'>
              <button href="#" 
                onClick={ addPost } 
                className="btn"><img src="https://img.icons8.com/color/48/000000/send-letter--v1.png"/>
                Post
              </button>
              <button href='#' className='btn'><img src="https://img.icons8.com/color/48/000000/filled-trash.png"/>Remove</button>
              </div>
          </div>
          <div className="post__items">
            { postElement }
          </div>
        </div>
    )
}

export default MyPosts;