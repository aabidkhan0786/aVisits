import React, { useState, useEffect } from 'react'
import FileBase from "react-file-base64"
import { useDispatch, useSelector } from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';


const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    });
    const [load,setLoad] =useState(false)

    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null));

    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post);
    }, [post])


    const clear = (e) => {
        // e.preventDefault();
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    };

    const handleSubmit = async (e) => {
        setLoad(true)
        e.preventDefault();
        if (currentId === 0) {
            if (postData.creator === "" || postData.selectedFile === "") {
                return alert("Please atleast fill Creator name and Image field !")

            }
            dispatch(createPost(postData));
            setLoad(false)
            clear();
        } else {
            dispatch(updatePost(currentId, postData));
            clear();
            setLoad(false)
        }
        setLoad(false)
    }
    return (
        <>
            <div className="row">
                <div className="col-lg-10 col-md-10 col-11 mx-auto my-3">
                    <form className="shadow-lg p-3 mb-5 bg-transparent text-dark rounded">
                        <div className="row-fluid">
                            <div className="col my-3 ">
                                <input type="text" name="creator" value={postData.creator} onChange={e => setPostData({ ...postData, creator: e.target.value })} className="form-control" placeholder="Creator" />
                            </div>
                            <div className="col my-3">
                                <input type="text" name="title" value={postData.title} onChange={e => setPostData({ ...postData, title: e.target.value })} className="form-control" placeholder="Title" />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="col my-3">
                                <input type="text" name="message" value={postData.message} onChange={e => setPostData({ ...postData, message: e.target.value })} className="form-control" placeholder="Message" />
                            </div>
                            <div className="col my-3">
                                <input type="text" name="tags" value={postData.tags} onChange={e => setPostData({ ...postData, tags: e.target.value })} className="form-control" placeholder="Tags" />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="col my-3">
                                <FileBase
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                                />
                            </div>
                        </div>
                        <div className="row-fluid">
                            <div className="col my-3">
                                <button className="btn btn-block btn-primary my-2" onClick={handleSubmit}><i class="fas fa-dot-circle p-2"></i>{load ? "Creating..." : "Submit"}</button>
                                <button className="btn btn-block btn-secondary my-2" onClick={clear}><i class="fas fa-broom p-2"></i>Clear</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Form
