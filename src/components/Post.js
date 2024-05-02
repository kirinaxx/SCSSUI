//I'm putting this component in it's own file because it might potentially be able to be reused in the ongoing page?
import './post.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Post(props) {
    const link = '/' + props.ID
    
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
                        likes: {props.numberOfLikes}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Post