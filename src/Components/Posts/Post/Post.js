import moment from 'moment'
import React from 'react'
import './styles.css'
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'


const Post = ({ post, setCurrentId }) => {

  const dispatch = useDispatch();
  console.log(post);
  return (
    <>
      {/* <div className="col m-3 mb-5"> */}
      <div className="row-fluid">
        <div className="col-lg-11 my-3 col-md-11 col-11 mx-auto">
          <div className="card shadow-lg p-3 mb-5 bg-transparent text-dark rounded">
            <div className="card-header bg-transparent border-success text-center ">
              <h3 className="text-capitalize text_name">{post.creator}</h3>
              <button type="button" className="btn btn-primary float-right" onClick={() => dispatch(likePost(post._id))}>
                <i className="far fa-heart "></i>
                <span className="badge badge-light ml-2">{post.likeCount}</span>
                <span className="sr-only">unread messages</span>
              </button>
            </div>
            <img src={post.selectedFile} className="card-img-top" alt={post.title} />
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.message}</p>
              <h5 className="card-title">{post.tags}</h5>
            </div>
            <div className="card-footer bg-transparent border-success">
              <p className="card-text"><small className="h6">Last updated {moment(post.createdAt).fromNow()}.</small></p>
              <div className="buttn">
                <button className="btn btn-warning mx-2" onClick={() => setCurrentId(post._id)}><i className="fas fa-pen "></i></button>
                <button className="btn btn-danger mx-2" onClick={() => dispatch(deletePost(post._id))} ><i className="fas fa-trash-alt "></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post
