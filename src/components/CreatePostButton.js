import React from "react";
import "./CreatePostButton.css"; // Import CSS file for CreatePostButton styles

const CreatePostButton = ({ onClick, children }) => {
    return (
      <button className="create-post-button" onClick={onClick}>
        {children}
      </button>
    );
};

export default CreatePostButton;
