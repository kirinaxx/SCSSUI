//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import horizontalLogo from "../assets/horizontalSacStateLogo.png"
import Post from "./Post";
import './Home.css'

function Home(props) {

    const language = props.language[0]

    return(
        <>
            <div className='Logo-Container'>
                <img className='Sac-Logo' src={horizontalLogo} alt="Sac State Logo"></img>
            </div>
            <div className="GroupBar">
                <p>I *think* the groups tab will go here in the future maybe? idk how we are gonna style it</p>
            </div>
            <PostList posts={props.posts}/>
        </>
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