//not technically a component so sorry for putting this in the components folder
//this is a placeholder, im currently working on getting access to the cloud translate api
import ListOfLanguages from "./ListOfLanguages";

function translate(input, lang) {
    if (lang === 'English') {
        return(input)
    } else {
        return('[' + lang + ' text]');
    }
}

export default translate