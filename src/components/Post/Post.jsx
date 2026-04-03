import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title}=post;
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/');
    }
    return (
        <div style={{border:'1px solid black', margin:'10px', padding:'10px'}}>
            <h3>{title}</h3>
            <Link to={`/posts/${id}`}>View Details</Link>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
};

export default Post;