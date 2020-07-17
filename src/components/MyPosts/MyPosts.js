import React from 'react';
import Post from '../Post/Post';
import '../MyPosts/MyPosts.css';
import {Field,reduxForm} from 'redux-form'

const MyPosts = (props) => {

  let postElement = props.postsData.map( p =>  <Post message={p.post} likeCounts={p.likeCounts}/> );

  let newPostItem = React.createRef();

  let onAddPost = (value) => { 
    props.addPost(value.newPostText);
  };

    return (
        <div>
          <div className='posts'>
              <div className="postLogo">
                <p>My posts</p>
              </div>
              <AddPostReduxForm onSubmit={onAddPost}/>
          </div>
          <div className="post__items">
            { postElement }
          </div>
        </div>
    )
}


const AddNewPostForm = (props) =>{
  return (
      <form onSubmit={props.handleSubmit}>
        <Field  ref={props.newPostItem} 
                className="inp form-control" 
                id="exampleInputEmail1" 
                placeholder="Write a post..." 
                aria-describedby="emailHelp"
                component={'input'}
                name={'newPostText'}/>
          <div className='btns'>
            <button
                className="btn"><img src="https://img.icons8.com/color/48/000000/send-letter--v1.png"/>
                Post
            </button>
            <button href='#' className='btn'><img src="https://img.icons8.com/color/48/000000/filled-trash.png"/>Remove</button>
          </div>
      </form>
  )
}


const AddPostReduxForm = reduxForm({form: 'newPostForm'})(AddNewPostForm)

export default MyPosts;