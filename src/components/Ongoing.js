//useOutletContext is going to be how we receive state variables from parent components
import { useOutletContext } from "react-router-dom";
import translate from "./TranslationStation";

function Ongoing(props) {

    const language = props.language[0]

    return(
        <>
            <h1>{translate("Ongoing Things", language)}</h1>
        </>
    );
}

export default Ongoing;