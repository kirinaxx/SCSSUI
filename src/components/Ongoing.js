import React, { useState } from "react";
import Post from "./Post";
import CreatePostButton from "./CreatePostButton";
import "./post.css";
import { addPost } from "../service/postService";

function Ongoing(props) {
    const language = props.language[0];

    const [creatingPost, setCreatingPost] = useState(false);
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");
    

    const handleCreatePost = () => {
        setCreatingPost(true);
    };

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setPostBody(event.target.value);
    };

    const handleCancelPost = () => {
        setCreatingPost(false);
        // Reset post title and body
        setPostTitle("");
        setPostBody("");
    };

    const handlePostSubmit = () => {
        // Handle submitting the post data (e.g., send to backend)
        // Reset post title and body
        const newPost = {
            id: null, 
            title: postTitle, 
            postOriginal: postBody,
            numberOfLikes: 0, 
            parentId: 0,
            tagIds: [1,3]
        };
        addPost(newPost).then(() => {
            console.log(newPost);
        })

        setPostTitle("");
        setPostBody("");
        // After submitting, set creatingPost to false to hide the input fields
        setCreatingPost(false);
    };

    return (
        <>
            <CreatePostButton onClick={handleCreatePost}>Create a Post</CreatePostButton>
            {creatingPost && (
                <div className="posts-container">
                    <div className="empty-post">
                        <div className="post-padding">
                            {/* Title input field */}
                            <div>
                                <input
                                    type="text"
                                    value={postTitle}
                                    onChange={handleTitleChange}
                                    placeholder="Enter title"
                                    className="post-title"
                                />
                            </div>
                            {/* Body text area */}
                            <div>
                                <textarea
                                    value={postBody}
                                    onChange={handleBodyChange}
                                    placeholder="Enter post body"
                                    className="description"
                                />
                            </div>
                            {/* Buttons */}
                            <div className="stuff-below">
                                <button onClick={handleCancelPost}>Cancel</button>
                                <button onClick={handlePostSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Regular posts go here */}
            <div className="posts-container">
                {props.posts.map((post) => (
                    <Post
                        id={post.id}
                        title={post.title}
                        user={post.user}
                        pfp={post.pfp}
                        postOriginal={post.postOriginal}
                        date={post.date}
                        numberOfLikes={post.numberOfLikes}
                    />
                ))}
            </div>
        </>
    );
}

export default Ongoing;
