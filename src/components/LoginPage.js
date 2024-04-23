import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import CSS file for styling
import logo from '../assets/hornetGuy.png'; //website logo

function LoginPage() {
    return (
        <div className="login-page">
            <div className="background-image"></div>

            <div className="login-container">
                <img src={logo} alt="Website Logo" className="logo-image" /> {/* Circular Logo */}
                <p style={{ marginBottom: '20px' }}>Don’t have an account? <Link to="/register">Click here to register for one!</Link></p> {/* Text */}
                <form>
                    {/* Username input field */}
                    <input className="username-input" type="text" placeholder="Username" />
                    {/* Password input field */}
                    <input className="password-input" type="password" placeholder="Password" />
                    {/* Login button */}
                    <button className="login-button" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;