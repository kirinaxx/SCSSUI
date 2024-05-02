//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";
import React from "react";

function About(props) {

    const language = props.language[0]

    return(
        <>
            <h1>{translate("ABOUT", language)}</h1>
        </>
    );
}

export default About;