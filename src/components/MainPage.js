import {Link, NavLink, Outlet} from 'react-router-dom';
import './MainPage.css';
import guestProfile from '../assets/guestProfilePic.png';
import hornetGuy from '../assets/hornetGuy.png'
import { useState } from 'react';
import translate from './TranslationStation';

//MainPage has a bunch of child pages (eg. 'home', 'FAQ', etc.), the <Outlet /> is a standin for whatever current child page we are on
function MainPage(props) {
    return (
        <>
            <TopBannerThing language={props.language}/>
            <NavBar language={props.language} />
            <Outlet />
        </>
    );
}

const languages = ['English', 'Spanish', 'Farsi']



//ALL the code below is for the components TopBannerThing and NavBar, also functions and sub-components for them
//this code is a little gross, sorry :(
const highlight = ({isActive}) => {
    return isActive ? 'nav-item-active' : 'nav-item'
}

//className={props.currLang === lang ? 'lang-button-active' : 'lang-button'}

function DropDown(props) {
    const [language, setLanguage] = props.language

    const listItems = languages.map(lang => {
        return(
        <li>
            <button className={language === lang ? 'lang-button-active' : 'lang-button'} onClick={() => {
                                                                                                setLanguage(lang)
                                                                                                console.log('hopefully worked' + language)}}>
                {lang}
            </button>
        </li>)}
        )


    return(
        <div className='dropdown'>
            <ul className='list-inside-dropdown'>
                {listItems}
            </ul>
        </div>
    );
}

function NavBar(props) {
    const [displayDropDown, setDisplayDropDown] = useState(false);
    const language = props.language[0]

    return(
        <ul className='navbar'>
            <li>
                <NavLink className={highlight} to='/'>{translate('Home', language)}</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/Ongoing'>{translate('Ongoing', language)}</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/Resources'>{translate('Resources', language)}</NavLink>
            </li>
            <li>
                <button className='lang-changer' onClick={() => setDisplayDropDown(!displayDropDown)}>{translate('Change Language', language)}</button>
                {displayDropDown ? <DropDown language={props.language}/> : <></>}
            </li>
            
            <li>
                <NavLink className={highlight} to='/FAQ'>FAQ</NavLink>
            </li>
            <li>
                <NavLink className={highlight} to='/About'>{translate('About', language)}</NavLink>
            </li>
        </ul>
    );
}



//at some point we'll probably want an isLoggedIn boolean, and then conditionally render the profile pic using that
function TopBannerThing(props) {

    const language = props.language[0]

    return (
        <div className="top-banner-thing">
            <div className="title-cluster">
                <h1 className='title'>Hornet Hangout</h1>
                <div className="thing-below-main-title">
                    <h2 className='sub-title'>{translate('Sacramento State Community Forum', language)}</h2>
                    <img className='profile-pic' src={guestProfile} alt="profile pic"></img>
                </div>
            </div>

            <div className='right-most-thing'>
                <img className='logo' src={hornetGuy} alt="little logo"></img>
                <Link to='/LoginPage'>
                    <button className='login-button'>
                        {translate("Login", language)}
                    </button>
                </Link>
            </div>
        </div>
    );

}

export default MainPage;