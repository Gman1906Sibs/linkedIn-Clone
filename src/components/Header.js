import React from 'react';
import { connect } from "react-redux";
import './Header.css';
import Logo from '../images/home-logo.svg';
import SearchIcon from '@material-ui/icons/Search';
import HomeLogo from '../images/nav-home.svg';
import Jobs from '../images/nav-jobs.svg';
import Messaging from '../images/nav-messaging.svg';
import Network from '../images/nav-network.svg';
import Notifications from '../images/nav-notifications.svg';
import User from '../images/user.svg';
import DownIcon from '../images/down-icon.svg';
import Work from '../images/nav-work.svg';
import styled from 'styled-components';
import { SignOutAPI } from "../actions";


function Header(props) {
    return (
        <div className="header__container">
            <div className='header'>
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/home">
                            <img src={Logo} alt=""/>
                        </a>
                    </div>
                    <div className="header__search">
                        <input type="text" placeholder="Search"/>
                        <SearchIcon className="header__searchIcon" />
                    </div>
                    <div className="header__navMenu">
                        <div className='header__navWrap'>

                            <div className='header__navItems active'>
                                <a>
                                    <img src={HomeLogo} alt=""/>
                                    <span>Home</span>
                                </a>
                            </div>

                             <div className='header__navItems'>
                                <a>
                                    <img src={Network} alt=""/>
                                    <span>My Network</span>
                                </a>
                            </div>

                             <div className='header__navItems'>
                                <a>
                                    <img src={Jobs} alt=""/>
                                    <span>Jobs</span>
                                </a>
                            </div>

                             <div className='header__navItems'>
                                <a>
                                    <img src={Messaging} alt=""/>
                                    <span>Messaging</span>
                                </a>
                            </div>

                             <div className='header__navItems'>
                                <a>
                                    <img src={Notifications} alt=""/>
                                    <span>Notifications</span>
                                </a>
                            </div>

                            <MyUser>
                                <div className="header__navUser icons">
                                    <a>
                                        { props.user && props.user.photoURL ? (
                                            <img src={props.user.photoURL} alt=""/>
                                        ) :
                                        <img src={User} alt=""/>
                                        }
                                        <span> 
                                            Me 
                                            <img src={DownIcon} alt=""/>
                                        </span>
                                    </a>

                                    <SignUserOut onClick= {() => props.signOut()}>
                                        <div className="header__navSignout">
                                            <a>
                                                <span>Sign Out</span>
                                            </a>
                                        </div>
                                    </SignUserOut>
                                    
                                </div>
                            </MyUser>
                            

                            <div className="header__navWork icons">
                                <a>
                                    <img src={Work} alt=""/>
                                    <span> 
                                        Work 
                                        <img src={DownIcon} alt=""/>
                                    </span>
                                    
                                </a>
                            </div>

                            <div className="header__navPremium">
                                <a>
                                    <span>Try Premium Free</span>
                                    <span>for 1 Month</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}



const SignUserOut = styled.div`
display: none;
`;

const MyUser = styled.div`
&:hover {
    ${SignUserOut} {
        display: flex;
    }
}
`;

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

const mapDispatchToProps = (dispatch) => ({
    signOut: () => dispatch(SignOutAPI()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Header);