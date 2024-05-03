//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import React, { useState } from "react";
import horizontalLogo from "../assets/horizontalSacStateLogo.png"
import SearchBar from "./SearchBar";
import Post from "./Post";
import './Home.css'
import CreatePostButton from "./CreatePostButton";
import { WithContext as ReactTags } from 'react-tag-input';
import { getAllTags } from "../service/tagsService";
import { addPost } from "../service/postService";
import { getAllPosts } from "../service/postService";
import { useEffect } from "react";
import axios from "axios";

function Home(props) {

    const language = props.language[0]
    const [postTitle, setPostTitle] = useState("");
    const [postBody, setPostBody] = useState("");

      
      const KeyCodes = {
        comma: 188,
        enter: 13
      };
      
      const delimiters = [KeyCodes.comma, KeyCodes.enter];
      
        const [tags, setTags] = useState([]);
        const [tagsSuggestion, setTagsSuggestion] = useState([{id:0, text:''}]);

       
      
        const handleDelete = i => {
          setTags(tags.filter((tag, index) => index !== i));
        };
      
        const handleAddition = tag => {
            setTags([ tag])
          setTags(tags.length > 0 ? [...tags, tag] : [tag]);
        };
      
        const handleDrag = (tag, currPos, newPos) => {
          const newTags = tags.slice();
      
          newTags.splice(currPos, 1);
          newTags.splice(newPos, 0, tag);
      
          // re-render
          setTags(newTags);
        };
      
        const handleTagClick = index => {
          console.log('The tag at index ' + index + ' was clicked');
        };

    const handleTitleChange = (event) => {
        setPostTitle(event.target.value);
    };

    const handleBodyChange = (event) => {
        setPostBody(event.target.value);
    };
    const CancelToken = axios.CancelToken;
    const cancelSource = React.useRef(null);

        useEffect(() => {
            cancelSource.current = CancelToken.source();
            getAllPosts().then(res => {
                res.data = res.data.filter(x => x.parentId == null);
                handleDataFromChild(res.data);
            })
            return () => { cancelSource.current.cancel(); };
        }, ["http://localhost:8080/api/posts/allposts"]);
        useEffect(() => {
            cancelSource.current = CancelToken.source();
            getAllTags().then(res => {
                res.data = res.data.map(x => {
                    return { id: x.id.toString(), text: x.tag }
                });
                setTagsSuggestion(res.data);
            })
            return () => { cancelSource.current.cancel(); };
        }, ["http://localhost:8080/api/posts/allposts"]);
        // getAllPosts().then((res) => {
        //     res.data = res.data.filter(x => x.parentId == null);
        //     handleDataFromChild(res.data)
        //     console.log("home get all posts");
        //   });
    
    function handleDataFromChild(data) {
        props.setPosts(data);
      }
    const handleCancelPost = () => {
        // Reset post title and body
        setPostTitle("");
        setPostBody("");
    };

    const handlePostSubmit = () => {
        // Handle submitting the post data (e.g., send to backend)
        // Reset post title and body
        //var tags = tags;
        const newPost = {
            id: null, 
            title: postTitle, 
            postOriginal: postBody,
            numberOfLikes: 0, 
            parentId: 0,
            tagIds: []
        };
        addPost(newPost).then(() => {
            console.log(newPost);
        })

        setPostTitle("");
        setPostBody("");
    };

    return (
        <body>
            <div className='Logo-Container'>
                <img className='Sac-Logo' src={horizontalLogo} alt="Sac State Logo"></img>
            </div>
            <div style={{ width: "100%", display: "table" }}>
                <div style={{ display: "table-row" }}>
                    <div className="GroupBar" style={{ width: "20%", display: "table-cell" }}>
                        <p>I *think* the groups tab will go here in the future maybe? idk how we are gonna style it</p>
                    </div>
                    <SearchBar setPosts={handleDataFromChild} />
                    <div style={{  marginLeft: "22%", width: "78%", display: "table-cell" }}>
                       <div className="posts-container" style={{display: "table-row"}}>
                            <div className="empty-post">
                                <div className="post-padding">
                                    <div>
                                        <input
                                            type="text"
                                            value={postTitle}
                                            onChange={handleTitleChange}
                                            placeholder="Enter title"
                                            className="post-title"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            value={postBody}
                                            onChange={handleBodyChange}
                                            placeholder="Enter post body"
                                            className="description"
                                        />
                                    </div>
                                    <div style={{ textAlign: "left", marginTop: "120px"}} class="tags">
                                    <ReactTags
                                        tags={tags}
                                        suggestions={tagsSuggestion}
                                        delimiters={delimiters}
                                        handleDelete={handleDelete}
                                        handleAddition={handleAddition}
                                        handleDrag={handleDrag}
                                        handleTagClick={handleTagClick}
                                        inputFieldPosition="top"
                                        autocomplete
                                    />
                                    </div>
                                    <div className="stuff-below-home">
                                    
                                        <button onClick={handleCancelPost}>Cancel</button>
                                        <button onClick={handlePostSubmit}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                <div style={{ display: "table-row" }}>
                    {/* <CreatePostButton children={"Create New Post"} onClick={() => {}}></CreatePostButton> */}
                    <PostList posts={props.posts} />

                </div>
                </div>
            </div>
            </div>
        </body>
    );
}

function PostList(props) {
    //this converts the array of javascript objects 'fakePostObjs' into an array of html Post components
    const listOfPosts = getHomePagePosts(props.posts).map(function (post) {
        return (
            <li>
                <Post user={post.user} title={post.title} id={post.id} postOriginal={post.postOriginal} date={post.date} numberOfLikes={post.numberOfLikes} />
            </li>
        );
    })

    return (
        <ul className='post-list'>
            {listOfPosts}
        </ul>
    );
}

function getHomePagePosts(posts) {
    return posts.sort((a, b) => b.likes - a.likes);
}

export default Home;