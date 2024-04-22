
function translate(input, lang) {
    if (lang === 'English') {
        return(input)
    } else {
        return('[' + lang + ' text]');
    }
}

export default translate