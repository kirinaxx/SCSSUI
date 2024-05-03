//I'm putting this component in it's own file because it might potentially be able to be reused in the ongoing page?
import './post.css'
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import post from '../models/post';
import { addPost, getAllPostsByParentId } from '../service/postService';
import Comment from './Comment';

function Post(props) {
    const link = '/' + props.id
    // console.log(props);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenComment, setIsOpenComment] = useState(false);
    const [comments, setComments] = useState([]);
    function openCloseReply()
    {
        setIsOpen(!isOpen);
        if(isOpenComment == true)
            setIsOpenComment(false);
    }
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
        addPost(newPost).then(() => {
            console.log(post);
            setIsOpen(!isOpen);
        })
        isOpen(false);
    }

    function seeComments(parentId)
    {
        setIsOpenComment(!isOpenComment);
        if(isOpen == true)
            setIsOpen(false);
        if(isOpenComment)
        {
        getAllPostsByParentId(parentId).then((res) => {
           
            setComments(res.data)
          });
        }
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
                    <a style={{textDecoration:"underline", color:"blue"}} onClick={(event) => openCloseReply()}>Reply</a>
                    <a style={{textDecoration:"underline", color:"blue"}}onClick={() => seeComments(props.id)}>See Commments</a>
                </div>
                <div>
                    <div className="text-area">
                    <textarea style={{display: isOpen ? "flex" : "none"}} className="text-input" rows="6" placeholder="Write your reply..." id={"post" + props.id} ></textarea>
                    <button className="post-button" hidden={!isOpen} onClick={() => replyToPost(props.id)}>Post</button>
                    <div style={{display: isOpenComment ? "flex" : "none", marginLeft:"20%", width: "80%", display:"table-cell"}}>
                    {comments.map((c) => {       
                        return (
                            <li>
                            <Comment postOriginal={c.postOriginal} title={c.title} user={c.user} id={c.id} date={c.date} numberOfLikes={c.numberOfLikes}></Comment>
                            </li>
                            ) 
                     })}
                    </div>
                 </div>
                </div>
               </div>
            </div>
        </div>
    );
}

export default Post