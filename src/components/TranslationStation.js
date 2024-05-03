//not technically a component so sorry for putting this in the components folder
//this is a placeholder, im currently working on getting access to the cloud translate api
import ListOfLanguages from "./ListOfLanguages";
import axios from "axios";

const baseUrl = "http://localhost:8080/api/translation"

function translate(input, lang) {
    if (lang === 'English') {
        return(input)
    } else {
        var output = ""
        const target = getLanguageCode(lang)
        axios.get(baseUrl + "/" + target + "/" + input).then( (response) => output = response.data);
        return(output);
    }
}

function getLanguageCode(lang) {
    for (var i = 0; i < ListOfLanguages.length; i++) {
        if (ListOfLanguages[i][1] === lang) {
            return (ListOfLanguages[i][0]);
        }
    }
}

export default translate