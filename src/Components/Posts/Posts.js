import React from 'react'
// import Post from './Post/Post'
import { useSelector } from 'react-redux'
import Post from './Post/Post';
import "./styles.css"

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.posts);


  return (

    !posts.length ? (
      <>
        <div className="lds-ripple d-flex justify-center"><div></div><div></div></div>
      </>
    ) :
      (<>
        {posts.map(post => (
          <Post post={post} key={post._id} setCurrentId={setCurrentId} />
        ))}
      </>)


  )
}

export default Posts
