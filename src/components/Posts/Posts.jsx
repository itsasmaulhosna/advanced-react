import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts=useLoaderData();
    
    return (
        <div>
            <h3>Posts:{posts.length}</h3>
            <div>
                {
                    posts.map(post=><Post post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;