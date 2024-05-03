import { Link } from 'react-router-dom';
import { useState } from 'react';
import './LoginPage.css'; // Import CSS file for styling
import logo from '../assets/hornetGuy.png'; //website logo
import React, { useRef } from "react";
import { sha512 } from '../SecurityUtils';
import axios from "axios";

function LoginPage() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [confirmUsername, setConfirmUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formError, setFormError] = useState('');

    const toggleRegister = () => {
        setIsRegistering(!isRegistering);
        setFormError('');
    };
    const crypto = require('crypto');

    function sha512(input) {
        return crypto.createHash('sha512').update(input).digest('hex');
    }

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleConfirmUsernameChange = (e) => {
        setConfirmUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isRegistering) {
            // Check if username and confirm username match
            if (username !== confirmUsername) {
                setFormError('Usernames do not match');
                return;
            }
            // Check if password and confirm password match
            if (password !== confirmPassword) {
                setFormError('Passwords do not match');
                return;
                
            }
            debugger;
            //Hash the password using SHA-512
            const hashedPassword = sha512(password);
            try {
                // Call Java API with the registration info including the hashed password
                const response = await axios.post('http://localhost:8080/api/user/signup', { userLogin: username, userPassword: hashedPassword, userHash: hashedPassword, userName: username});
    
                // Handle the response as needed
                console.log('Registration successful:', response.data);
    
                // Redirect the user to the login page after successful registration
                // history.push('/login');
            } catch (error) {
                console.error('Registration failed:', error);
                // Handle registration failure, display error message, etc.
            }

        } else {
            // Login logic here
            // Hash the password and check it against the password hash linked to that username
            const hashedPassword = sha512(password);

            try {
                // Call Java API to authenticate the user
                const response = await axios.post('http://localhost:8080/api/user/login', { userLogin: username, userHash: hashedPassword});
                
                // Success response:
                console.log('Login successful,', response.data);

                // Redirect user to home page
                // history.push('/home')
            } catch (error){
                // Handle errors such as incorrect credentials or server errors
                // Display error message to the user
                console.error('Login failed:', error);
                setFormError('Invalid username or password');
            }
        }
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
                <form onSubmit={handleSubmit}>
                    {/* Username input field */}
                    <input className={`username-input ${isRegistering ? 'show' : ''}`} type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
                    {isRegistering && (
                        <>
                            {/* Confirm Username input field */}
                            <input className="confirm-username-input" type="text" placeholder="Confirm Username" value={confirmUsername} onChange={handleConfirmUsernameChange} />
                        </>
                    )}
                    {/* Password input field */}
                    <input className={`password-input ${isRegistering ? 'show' : ''}`} type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
                    {isRegistering && (
                        <>
                            {/* Confirm Password input field */}
                            <input className="confirm-password-input" type="password" placeholder="Confirm Password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                        </>
                    )}
                    {/* Display form error message */}
                    {formError && <p className="form-error">{formError}</p>}
                    {/* Login/Register button */}
                    <button className="login-button" type="submit">{isRegistering ? 'Register' : 'Login'}</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
