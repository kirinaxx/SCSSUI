import axios from "axios";
import ListOfLanguages from "./ListOfLanguages";

const baseUrl = "http://localhost:8080/api/translation";

async function translate(input, lang) {
    if (lang === 'English') {
        return input;
    } else {
        const target = getLanguageCode(lang);
        try {
            const response = await axios.get(`${baseUrl}/${target}/${input}`);
            return response.data;
        } catch (error) {
            console.error("Error fetching translation:", error);
            return `Translation error: ${error.message}`; // Include error message in the return value
        }
    }
}

function getLanguageCode(lang) {
    for (let i = 0; i < ListOfLanguages.length; i++) {
        if (ListOfLanguages[i][1] === lang) {
            return ListOfLanguages[i][0];
        }
    }
    return ""; // Handle case where language code is not found
}

export default translate;
