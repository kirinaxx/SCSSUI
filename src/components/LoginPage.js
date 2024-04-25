import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import logo from '../assets/hornetGuy.png'; //website logo

function LoginPage() {
    const [isRegistering, setIsRegistering] = useState(false);

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <div className="login-page">
            <div className="background-image"></div>

            <div className={`login-container ${isRegistering ? 'registering' : ''}`}>
                <img src={logo} alt="Website Logo" className="logo-image" /> {/* Circular Logo */}
                <div className="text-container">
                    <p>
                        {isRegistering ? "Already have an account? " : "Don't have an account? "}
                        <Link to="#" className="register-link" onClick={toggleRegister}>
                            {isRegistering ? 'Back to Login' : 'Click here to Register!'}
                        </Link>
                    </p>
                </div>
                <Link to="/" className="back-button">&#8592; Go Back</Link>
                <form>
                    {/* Username input field */}
                    <input className={`username-input ${isRegistering ? 'show' : ''}`} type="text" placeholder="Username" />
                    {isRegistering && (
                        <>
                            {/* Confirm Username input field */}
                            <input className="confirm-username-input" type="text" placeholder="Confirm Username" />
                        </>
                    )}
                    {/* Password input field */}
                    <input className={`password-input ${isRegistering ? 'show' : ''}`} type="password" placeholder="Password" />
                    {isRegistering && (
                        <>
                            {/* Confirm Password input field */}
                            <input className="confirm-password-input" type="password" placeholder="Confirm Password" />
                        </>
                    )}
                    {/* Login button */}
                    <button className="login-button" type="submit">{isRegistering ? 'Register' : 'Login'}</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
