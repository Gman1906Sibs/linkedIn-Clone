import React from 'react';
import { connect } from "react-redux";
import HomeRightContent from './HomeRightContent';
import './Home.css';
import HomeLeftContent from './HomeLeftContent';
import HomeMiddleContent from './HomeMiddleContent';
import { Redirect } from 'react-router-dom';


function Home(props) {
    return (
        <div className='home__container'>
            { !props.user && <Redirect to="/" />}
            <div className="home__topAdd">
                <h4>
                    <span className="home__topAddBlue underLined">Field Marketing and Brand</span>
                    <span className='underLined grey'> - Field Marketing can help expand brands internationally.</span> 
                    <span className="home__topAddP">Ad </span>
                    <span className='home__topAddBullet'>•••</span> 
                </h4> 
            </div>
            <div className="home">
                
                <div className="home__left">
                    <HomeLeftContent />
                </div>

                <div className="home__main">
                    <HomeMiddleContent />
                </div>

                <div className="home__right">
                    <HomeRightContent />
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

export default connect(mapStateToProps)(Home);
