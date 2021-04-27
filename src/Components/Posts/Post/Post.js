import moment from 'moment'
import React from 'react'
import './styles.css'
import {useDispatch} from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'


const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();

  return (
    <>
  <div class="col mb-4">
    <div class="card">
    <div class="card-header bg-transparent border-success text-center">
          <h3 className="text-capitalize">{post.creator}</h3>
          <button type="button" class="btn btn-outline-primary float-right" onClick={()=>dispatch(likePost(post._id))}>
            <i class="far fa-heart "></i>
            <span class="badge badge-light ml-2">{post.likeCount}</span>
            <span class="sr-only">unread messages</span>
          </button>
    </div>
      <img src={post.selectedFile} class="card-img-top" alt={post.title}/>
      <div class="card-body">
        <h5 class="card-title">{post.title}</h5>
        <p class="card-text">{post.message}</p>
        
        <h5 class="card-title">{post.tags.map(t=> (`#${t} `))}</h5>
      </div>
      <div class="card-footer bg-transparent border-success">
        <p class="card-text"><small class="text-muted">Last updated {moment(post.createdAt).fromNow()}.</small></p>
        <div className="buttn">
          <button className="btn btn-outline-warning mx-2" onClick={()=>setCurrentId(post._id)}><i class="fas fa-pen "></i></button>
          <button className="btn btn-outline-danger mx-2" onClick={()=> dispatch(deletePost(post._id))} ><i class="fas fa-trash-alt "></i></button>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}

export default Post
