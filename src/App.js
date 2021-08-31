import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { getPosts } from "./actions/posts";
import Form from './Components/Form/Form';
import Posts from './Components/Posts/Posts';

const App = () => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(0);

    useEffect(() => {
        dispatch(getPosts())
    }, [currentId, dispatch])
    return (
        <>
            <center>
                <nav className="nav shadow-lg  my-3 bg-transparent text-dark rounded"> <h2><u>aVisitzz</u></h2></nav>
            </center>
            <div className="parent_div">
                <div className="pic_sec">
                    <Posts setCurrentId={setCurrentId} />
                </div>
                <div className="form_sec">
                    <Form currentId={currentId} setCurrentId={setCurrentId} />
                </div>
            </div>
        </>
    )
}

export default App
