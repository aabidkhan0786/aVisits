import React,{useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'

import { getPosts } from "./actions/posts";
import Form from './Components/Form/Form';
import Posts from './Components/Posts/Posts';

const App = () => {
     const dispatch = useDispatch();
     const [currentId, setCurrentId] = useState(0);

     useEffect(()=>{
        dispatch(getPosts())
     },[currentId,dispatch])
    return (
        <>    
        <nav className="nav"> <h2><u>aVisits</u></h2></nav>
        <div className="parent_div">
            <div className="form_side mt-3 ">
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>
        </div>  
        <hr/>
        <div class="row row-cols-1 row-cols-md-2 m-5">
             <Posts setCurrentId={setCurrentId} />
        </div>      
        </>
    )
}

export default App
