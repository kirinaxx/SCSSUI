import { useParams } from "react-router-dom"
import "./FullscreenPost.css"

function FullscreenPost(props) {
    const params = useParams();
    
    const post = getPostFromPostID(props.posts, params.postID)
    return(
        <>
        <div className='the-whole-shBang'>
            <div className='fpost'>
                <div className='post-padding'>
                    <div className='top-part-post'>
                        <img className='pfp' src={post.pfp} alt='profile picture'></img>
                        <p className='fusername'>
                            {post.user}
                        </p>
                    </div>
                    <h2 className='post-title'>
                        {post.title}
                    </h2>
                    <p className='description'>
                        {post.description}
                    </p>
                    <div className='fstuff-below'>
                        <p>
                            {post.date}
                        </p>
                        <p>
                            likes: {post.likes}
                        </p>
                    </div>
                </div>
            </div>
            <div className='margin-between-post-and-comments'>
                <CommentList post={post} comments={props.comments}/>
            </div>
        </div>
        </>
    );
}

//some of the most unreadable code i have ever made in my life is below this comment - Ethan
function CommentList(props) {
    const post = props.post
    const commentIDs = props.post.children
    const AllComments = props.comments
    
    const commentsForPostInQuestion = getCommentsForPost(commentIDs, AllComments);
    
    const commentList = commentsForPostInQuestion.map(function(comment) {
        return(<Comment comment={comment} allComments={AllComments}/>)
    })
    return(
        <ul className="comment-list">
            {commentList}
        </ul>
    );
}

function Comment(props) {
    if (props.comment === null) {
        return (<></>)
    }
    var subComments = [];
    if (props.comment.children != null) {
        subComments = props.comment.children.map(function(child) {
            const childComment = getIndividualComment(props.allComments, child);
            return (<li><Comment comment={childComment} allComments={props.allComments}/></li>)
        })
    }   

    console.log("here is the subcomments: " + subComments[0])
    
    return(
        <li className='comment'>
            <p className='fusername'>{props.comment.user}</p>
            <p className='comment-body'>{props.comment.body}</p>
            <p className='likes-section'>likes: {props.comment.likes}</p>
            <div className='sub-comments'>
            {subComments}
            </div>
        </li>
        
    )
}

function getIndividualComment(allComments, childID) {
    var output = null;
    for (var i = 0; i < allComments.length; i++) {
        if (allComments[i].ID === childID) {
            output=allComments[i];
            break;
        }
    }
    return output
}

function getCommentsForPost(IDs, allComments) {
    var output=[];
    for (var j = 0; j < IDs.length; j++) {
        for (var i = 0; i < allComments.length; i++) {
            if (allComments[i].ID === IDs[j]){
                output.push(allComments[i]);
            }
        }
    }
    return output
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