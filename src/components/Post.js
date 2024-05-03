//I'm putting this component in it's own file because it might potentially be able to be reused in the ongoing page?
import './post.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import post from '../models/post';
import { addPost } from '../service/postService';

function Post(props) {
    const link = '/' + props.ID
    const [isOpen, setIsOpen] = useState(false);
    function replyToPost(parentId)
    {
        var post = document.getElementById('post'+parentId).value;
        const newPost = {
            id: null, 
            title: null, 
            postOriginal: post,
            numberOfLikes: 0, 
            parentId: parentId
        };
        addPost(post).then(() => {
            console.log(post);
            isOpen = !isOpen;
        })
    }

    function seeComments(parentId)
    {
        console.log("comments", parentId);
    }

    return (
        <div className='post'>
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
                
                <div className='stuff-below'>
                    <p>
                        { props.date }
                    </p>
                    <p>
                        Likes: {props.numberOfLikes}
                    </p>
                </div>
               <div>
               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end"}}>
                    <a style={{textDecoration:"underline", color:"blue"}} onClick={(event) => {setIsOpen(!isOpen)}}>Reply</a>
                    <a style={{textDecoration:"underline", color:"blue"}}onClick={() => seeComments(props.Id)}>See Commments</a>
                </div>
                <div>
                    <div className="text-area">
                    <textarea style={{display: isOpen ? "flex" : "none"}} className="text-input" rows="6" placeholder="Write your reply..." id={"post" + props.id} ></textarea>
                    <button className="post-button" hidden={!isOpen} onClick={() => replyToPost(props.id)}>Post</button>
                 </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Post