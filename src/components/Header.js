import React from 'react';
import './Header.css';
import Logo from '../images/home-logo.svg'

function Header() {
    return (
        <div className='header'>
            <div className="header__content">
                <div className="header__logo">
                    <a href="/home">
                        <img src={Logo} alt=""/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
