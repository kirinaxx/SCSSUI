//I'm putting this component in it's own file because it might potentially be able to be reused in the ongoing page?
import './post.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import post from '../models/post';
import { addPost, getAllPostsByParentId } from '../service/postService';

function Comment(props) {
    const link = '/' + props.id
    // console.log(props);

    return (
        <div className='comment'>
            <div className='post-padding'>
                <div className='top-part-post'>
                    <img className='pfp' src={props.pfp} alt='profile picture'></img>
                    <p className='username'>
                        {props.user}
                    </p>
                </div>
                <Link style={{textDecoration: 'none'}} to={link}>
                    <h2 className='post-title'>
                        {props.title}
                    </h2>
                </Link>
                <p className='description'>
                    {props.postOriginal}
                </p>
                
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <p>
                        { props.date }
                    </p>
                </div>
               <div>
               
               </div>
            </div>
        </div>
    );
}

export default Comment