import React from 'react'

import '../Post/Post.css'

const Post  = (props) => {
    return (
        <div className="card">
            <div className='item'>
            { props.message } <p href="#" className="like"><img src="https://img.icons8.com/color/48/000000/facebook-like.png"/>{props.likeCounts}</p> 
            </div>
        </div>
    )
}

export default Post;