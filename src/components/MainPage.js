import { Link, NavLink, Outlet } from 'react-router-dom';
import './MainPage.css';
import guestProfile from '../assets/guestProfilePic.png';
import hornetGuy from '../assets/hornetGuy.png'
import { useState, useEffect } from 'react'; // Import useEffect
import translate from './TranslationStation'; // Import translate function
import React from "react";
import ListOfLanguages from './ListOfLanguages';

// Define the highlight function
const highlight = ({ isActive }) => {
    return isActive ? 'nav-item-active' : 'nav-item';
}

function MainPage(props) {
    const [language, setLanguage] = useState(props.language);
    const [translatedNavBarItems, setTranslatedNavBarItems] = useState([]);

    // Array of text items for the NavBar
    const navBarItems = [
        'Home',
        'Ongoing',
        'Resources',
        'FAQ',
        'About',
        'Change Language' // This text will be replaced with the translated text
    ];

    // Function to handle language change
    const handleLanguageChange = async (selectedLanguage) => {
        setLanguage(selectedLanguage);
        const translatedItems = await translateAll(navBarItems, selectedLanguage);
        setTranslatedNavBarItems(translatedItems);
    }

    // Function to translate all items in an array
    const translateAll = async (items, lang) => {
        const translatedItems = await Promise.all(items.map(item => translate(item, lang)));
        return translatedItems;
    }

    return (
        <>
            <TopBannerThing language={language}/>
            <NavBar language={language} navBarItems={translatedNavBarItems.length > 0 ? translatedNavBarItems : navBarItems} onLanguageChange={handleLanguageChange} />
            <Outlet />
        </>
    );
}

function DropDown(props) {
    const { language, onLanguageChange } = props;

    const listItems = ListOfLanguages.map(lang => (
        <li key={lang[0]}>
            <button className={language === lang[1] ? 'lang-button-active' : 'lang-button'} onClick={() => onLanguageChange(lang[1])}>
                {lang[1]}
            </button>
        </li>
    ));

    return (
        <div className='dropdown'>
            <ul className='list-inside-dropdown'>
                {listItems}
            </ul>
        </div>
    );
}

function NavBar(props) {
    const { language, navBarItems, onLanguageChange } = props;
    const [displayDropDown, setDisplayDropDown] = useState(false);

    const handleLanguageButtonClick = () => {
        setDisplayDropDown(!displayDropDown);
    }

    return (
        <ul className='navbar'>
            {navBarItems.map((item, index) => (
                <li key={index}>
                    {index === navBarItems.length - 1 ? (
                        <button className='lang-changer' onClick={handleLanguageButtonClick}>{item}</button>
                    ) : (
                        <NavLink className={highlight} to={`/${item}`}>{item}</NavLink>
                    )}
                </li>
            ))}
            {displayDropDown && <DropDown language={language} onLanguageChange={onLanguageChange} />}
        </ul>
    );
}

function TopBannerThing(props) {
    const { language } = props;

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
