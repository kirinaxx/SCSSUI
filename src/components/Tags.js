import React, { useCallback, useState } from "react";
import './SearchBar.css';
import axios from 'axios';
import { getAllPosts, getAllPostsByTagId } from "../service/postService";
import { useRef } from "react";


function Tags(props) {
    var tagsSuggestion = props.tagsSuggestion;

    const [tags, SetTags] = useState([]);
    function handleClick(id) {
        id = parseInt(id);
        if(tags.includes(id))
        {
            tags.splice(tags.indexOf(x => x == id),1);
            document.getElementById(id).style.backgroundColor="#a3c3ba";
        }
        else
        {
            tags.push(id);
            var elemtn = document.getElementById(id);
            elemtn.style.backgroundColor="#F5FA0E";
        }
        SetTags(tags)
        console.log(tags)
        if (tags.length > 0) {
            getAllPostsByTagId(tags).then(res => {
                props.setPosts(res.data);
            });
        }
        else {
            getAllPosts().then(res => {
                props.setPosts(res.data);
            })
        }
      };

    return (
        <ul>
        {   
         tagsSuggestion.map(res => {
                return (<button style={{backgroundColor:"#a3c3ba", margin: "2px"}}
                id={res.id} onClick={() => handleClick(res.id)}>{res.text}</button>)
         })
        }
     </ul>
    );
}

export default Tags;
