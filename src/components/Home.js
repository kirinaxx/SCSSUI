//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import React from "react";
import horizontalLogo from "../assets/horizontalSacStateLogo.png"
import SearchBar from "./SearchBar";
import Post from "./Post";
import './Home.css'
import CreatePostButton from "./CreatePostButton";

const fakeCommentObjs = [
    {
        body: 'This was INSPIRATIONAL',
        user: 'appreciator of wisdom',
        ID: 40,
        likes: 1000,
        date: '04-30-2024',
        parent: 1,
        children: null
    },
    {
        body: 'Pfffft who cares old man??',
        user: 'fool',
        ID: 60,
        likes: -10000000,
        date: '04-30-2024',
        parent: 1,
        children: null
    },
    {
        body: 'great language cantonese is',
        user: 'Bob',
        ID: 10,
        likes: 4,
        date: '04-30-2024',
        parent: 4,
        children: null
    }
];

function Home(props) {

    const language = props.language[0]

    return(
        <body>
            <div className='Logo-Container'>
                <img className='Sac-Logo' src={horizontalLogo} alt="Sac State Logo"></img>
            </div>
            <div style={{width: "100%", display:"table"}}>
                <div style={{display:"table-row"}}>
                <div className="GroupBar" style={{width: "20%", display:"table-cell"}}>
                <p>I *think* the groups tab will go here in the future maybe? idk how we are gonna style it</p>
            </div>
            <SearchBar />
            <div style={{marginLeft:"20%", width: "80%", display:"table-cell"}}>
                {/* <CreatePostButton children={"Create New Post"} onClick={() => {}}></CreatePostButton> */}
                <PostList posts={props.posts}/>

                </div>
            </div>
            </div>
            
        </body>
    );
}

function PostList(props) {
    //this converts the array of javascript objects 'fakePostObjs' into an array of html Post components
    const listOfPosts = getHomePagePosts(props.posts).map( function(post) {
        return(
            <li>
                <Post user={post.user} title={post.title} ID={post.ID} description={post.description} date={post.date} likes={post.likes}/>
            </li>
        );
    })

    return(
        <ul className='post-list'>
            {listOfPosts}
        </ul>
    );
}

function getHomePagePosts(posts) {
    return posts.sort((a,b) => b.likes - a.likes);
}

export default Home;