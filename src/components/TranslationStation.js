//not technically a component so sorry for putting this in the components folder
//this is a placeholder, im currently working on getting access to the cloud translate api
import { useState } from "react";
import ListOfLanguages from "./ListOfLanguages";
import axios from "axios";



const baseUrl = "http://localhost:8080/api/translation"

 function translate(input, lang) {

    const [isLoaded, setIsLoaded] = useState([false, "loading"]);

    if (lang === 'English') {
        return(input)

    } else if(!isLoaded[0]) {
        const target = getLanguageCode(lang)

        axios.get(baseUrl + "/" + target + "/" + input).then( response => {
            setIsLoaded([true, response.data])
        })

        return("loading");

    } else if (isLoaded[0]) {
        return(isLoaded[1])
    }
}


function getLanguageCode(lang) {
    for (var i = 0; i < ListOfLanguages.length; i++) {
        if (ListOfLanguages[i][1] === lang) {
            return (ListOfLanguages[i][0]);
        }
    }
//     const [isSending, setIsSending] = useState(false)
//     const tagsClick = useCallback(async (id) => {
     
//     if (isSending) return
//     setIsSending(true)
//     await getAllPostsByTagId([id]).then(res => {
//         handleDataFromChild(res.data);
//     });
//     setIsSending(false)
//   }, [isSending])
}


export default translate