import {Link, NavLink, Outlet} from 'react-router-dom';
import './MainPage.css';
import guestProfile from '../assets/guestProfilePic.png';
import hornetGuy from '../assets/hornetGuy.png'

//MainPage has a bunch of child pages (eg. 'home', 'FAQ', etc.), the <Outlet /> is a standin for whatever current child page we are on
function MainPage() {
    return (
        <>
            <TopBannerThing />
            <NavBar />
            <Outlet />
        </>
    );
}

const highlight = ({isActive}) => {
    return isActive ? 'nav-item-active' : 'nav-item'
}

function NavBar() {
    return(
        <ul className='navbar'>
            <li>
                <NavLink className={highlight} to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/Ongoing'>Ongoing</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/Resources'>Resources</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/FAQ'>FAQ</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/About'>About</NavLink>
            </li>
        </ul>
    );
}

function TopBannerThing() {

    return (
        <div className="top-banner-thing">
            <div className="title-cluster">
                <h1 className='title'>Hornet Hangout</h1>
                <div className="thing-below-main-title">
                    <h2 className='sub-title'>Sacramento State Community Forum</h2>
                    <img className='profile-pic' src={guestProfile} alt="profile pic"></img>
                </div>
            </div>

            <div className='right-most-thing'>
                <img className='logo' src={hornetGuy} alt="little logo"></img>
                <Link to='/LoginPage'>
                    <button className='login-button'>
                    Login
                    </button>
                </Link>
            </div>
        </div>
    );

}

export default MainPage;