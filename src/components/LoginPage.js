import {Link} from 'react-router-dom';

function LoginPage() {
    return(
        <>
            <p>this is the login page, work in progress</p>
            <Link to='/'>
                <button>
                    GO BACK
                </button>
            </Link>
        </>
    );
}

export default LoginPage;