import React from 'react'
// import Post from './Post/Post'
import {useSelector} from 'react-redux'
import Post from './Post/Post';
import "./styles.css"

const Posts = ({setCurrentId}) => {
    const posts = useSelector(state=> state.posts);

    console.log(posts);
    return (
    
            !posts.length ? (
              <>
              <div class="lds-ripple"><div></div><div></div></div>
              </>
            ) :
          (  <>
               { posts.map(post=>(
                    // <Post post={post} />
                    <Post post={post} key={post._id} setCurrentId={setCurrentId} />
))}
            </>)
            
        
    )
}

export default Posts
