import {Link} from 'react-router-dom';
import translate from "./TranslationStation";

function LoginPage(props) {

    const language = props.language[0]

    return(
        <>
            <p>{translate("this is the login page, work in progress", language)}</p>
            <Link to='/'>
                <button>
                    {translate("GO BACK", language)}
                </button>
            </Link>
        </>
    );
}

export default LoginPage;