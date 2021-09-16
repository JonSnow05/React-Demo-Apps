import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

function Post() {

    const {id} = useParams();
    const [post, setPost] = useState({})

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
            setPost(res.data)
        console.log(post.title);
    }
        )
    },[id])
    return (
        <div>
            <h2>Posts page</h2><br/>

            <h4>UserID: {post.id}</h4> 
            <h5>Title: {post.title}</h5>
            
        </div>
    )
}

export default Post
