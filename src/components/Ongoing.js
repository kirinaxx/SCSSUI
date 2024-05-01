//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
<<<<<<< HEAD
=======
import CreatePostButton from "./CreatePostButton"; // Import the CreatePostButton component
>>>>>>> main

function Ongoing(props) {

    const language = props.language[0]
<<<<<<< HEAD
=======

    const handleCreatePost = () => {
        // Define the functionality for creating a post
    };
>>>>>>> main

    return(
        <>
            <h1>{translate("Ongoing Things", language)}</h1>
<<<<<<< HEAD
=======
            <CreatePostButton onClick={handleCreatePost}>Create a Post</CreatePostButton>
>>>>>>> main
        </>
    );
}

export default Ongoing;
