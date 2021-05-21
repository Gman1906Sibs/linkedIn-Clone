import React from 'react';
import { connect } from "react-redux";
import './HomeLeftContent.css';
import WidgetIcon from '../images/widget-icon.svg';
import ItemIcon from '../images/item-icon.svg';
import PlusIcon from '../images/plus-icon.svg';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

function HomeLeftContent(props) {
    return (
        <div className="cards">
            <div className='userCard'>
                <div className="userCard__info">
                    <div className="userCard__background"/>
                    <a>
                        <div className="userCard__photo"/>
                        <a className='userCard__link'>
                            Welcome, {props.user ? props.user.displayName : "there!" }
                        </a>
                        <div className="home__leftCardPhoto">
                            <a>Add a photo</a>
                        </div>
                    </a>
                </div>
                <div className="userCard__widget">
                    <a>
                        <div>
                            <span className='userCard__connections'>Connections</span>
                            <span className='userCard__network'>Grow your network</span>
                        </div>  
                        <img src={WidgetIcon} alt=""/>
                    </a>
                </div>
                <div className="userCard__premium">
                    <span className="userCard__premiumAcess">Access exclusive tools & insights</span>
                    <span className="userCard__premiumTry">
                        <img src="https://tandsgo.com/wp-content/uploads/2014/06/LinkedIn-Premium-Badge1.png" alt=""/>
                        Try Premium Free for 1 Month
                    </span>

                </div>
                <div className="userCard__item">
                    <span>
                        <img src={ItemIcon} alt=""/>
                        My Items
                    </span>
                </div>
            </div>

            <div className="communityCard">
                <a>
                    <span>Groups</span>
                </a>
                <a>
                    <span>Events</span>
                    <img src={PlusIcon} alt=""/>
                </a>
                <a>
                    <span>Follow Hashtags</span>
                </a>
                <div className="communityCard__discover">
                    <a>
                        <p>Discover more</p>
                    </a>
                </div>
               
            </div>
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userState.user,
    };
};

export default connect(mapStateToProps)(HomeLeftContent)
