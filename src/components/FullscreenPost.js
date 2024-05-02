import React from "react";
import { useParams } from "react-router-dom"


function FullscreenPost(props) {
    const params = useParams();
    
    const post = getPostFromPostID(props.posts, params.postID)
    return(
        <>
            <p>{post.title}</p>
        </>
    );
}

function getPostFromPostID(postList, id) {
    var output;
    for (var i = 0; i < postList.length; i++) {
        if (postList[i].ID === id) {
            output = postList[i];
            break;
        }
    }
    return (output);
}

export default FullscreenPost