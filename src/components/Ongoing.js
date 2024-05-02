//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import CreatePostButton from "./CreatePostButton"; // Import the CreatePostButton component
import React from "react";

function Ongoing(props) {

    const language = props.language[0]

    const handleCreatePost = () => {
        // Define the functionality for creating a post
    };

    return(
        <>
            <h1>{translate("Ongoing Things", language)}</h1>
            <CreatePostButton onClick={handleCreatePost}>Create a Post</CreatePostButton>
        </>
    );
}

export default Ongoing;
