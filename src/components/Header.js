import React from 'react';
import './Header.css';
import Logo from '../images/login-logo.svg'


function Header() {
    return (
        <div className="header__topContainer">
                <div className='header'>
                <div className="header__headerImg">
                    <img src={Logo} alt=""/>
                </div>
                <div className="header__right">
                    <p className='header__joinNow '>Join now</p>
                    <button className='header__signIn'>Sign in</button>
                </div>
            </div>
        </div>
        
    )
}

export default Header
