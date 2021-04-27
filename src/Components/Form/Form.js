import React,{useState , useEffect} from 'react'
import FileBase from "react-file-base64"
import {useDispatch, useSelector} from 'react-redux'
import { createPost, updatePost } from '../../actions/posts';


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        creator:"",
        title:"",
        message:"",
        tags:"",
        selectedFile:""
    });

    const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId): null));

     const dispatch = useDispatch();

     useEffect(()=>{
        if(post) setPostData(post);
     },[post])


     const clear = () => {
        setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    const handleSubmit= async (e)=>{
        e.preventDefault();
        if(currentId === 0){
            if(postData.creator ==="" || postData.selectedFile ==="" ){
                return alert("Please atleast fill Creator name and Image field !")

            }
            dispatch(createPost(postData));
            clear();
        }else{
            dispatch(updatePost(currentId,postData));
            clear();
        }
        
    }


    return (
        <>
            <div className="row-fluid">
                <div className="col-lg-10 col-md-10 col-12 mx-auto ">
                <form>
            <div class="row-fluid">
                <div class="col my-2 ">
                <input type="text" name="creator" value={postData.creator} onChange={e=>setPostData({...postData,creator : e.target.value})}  class="form-control" placeholder="Creator"/>
                </div>
                <div class="col my-2">
                <input type="text" name="title" value={postData.title} onChange={e=>setPostData({...postData,title : e.target.value})} class="form-control" placeholder="Title"/>
                </div>
            </div>
            <div class="row-fluid">
                <div class="col my-2">
                <input type="text" name="message" value={postData.message} onChange={e=>setPostData({...postData,message : e.target.value})}  class="form-control" placeholder="Message"/>
                </div>
                <div class="col my-2">
                <input type="text" name="tags" value={postData.tags} onChange={e=>setPostData({...postData,tags : e.target.value})} class="form-control" placeholder="Tags"/>
                </div>
            </div>
            <div className="row-fluid">
            <div class="col my-2">  
                <FileBase 
                    type="file"
                    multiple={false}
                    onDone={({base64})=> setPostData({...postData,selectedFile: base64})}
                />
                </div>
            </div>
            <div className="row-fluid">
            <div class="col my-2">  
            <button className="btn btn-block btn-primary" onClick={handleSubmit} >Submit</button>
            <button className="btn btn-block btn-warning" onClick={clear}>Clear</button>
            </div>
            </div>
            </form>
                </div>
            </div>

        </>
    )
}

export default Form
