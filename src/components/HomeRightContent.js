import React from 'react';
import './HomeRightContent.css';
import FeedIcon from '../images/feed-icon.svg';
import AddIcon from '@material-ui/icons/Add';
import RightIcon from '../images/right-icon.svg';


function HomeRightContent() {
    return (
        <div className='card'>
            <div className="followCard">
                <div className="followCard__title">
                    <h2>Add to your feed</h2>
                    <img src={FeedIcon} alt=""/>
                </div>
                <div className="followCard__feedList">
                    <ul>
                        <a>
                            <div className="followCard__avatar"></div>
                        </a>
                        <div>
                            <span className="followCard__feedListHeader">#Linkedin</span>
                            <span className="followCard__feedListText">Follow LinkedIn official</span>
                            <button><AddIcon className='AddIcon'/> Follow</button>
                        </div>
                    </ul>
                </div>
                <div className="followCard__feedList">
                    <ul>
                        <a>
                            <div className="followCard__avatar" />
                        </a>
                        <div>
                            <span className="followCard__feedListHeader">#Video</span>
                            <span className="followCard__feedListText">Follow LinkedIn official</span>
                            <button><AddIcon className='AddIcon'/>Follow</button>
                        </div>
                    </ul>
                </div>
                <div className="followCard__recommendations">
                    View all recommendations
                    <img src={RightIcon} alt=""/>
                </div>
            </div>

            <div className="coursesCard">
                <div className="coursesCard__title">
                    <h2>Today's most viewed courses</h2>
                    <img src={FeedIcon} alt=""/>
                </div>
                <div className="courses">
                    <div className="coursesCard__heading">
                        <h5>1. Executive Influence </h5>
                    </div>
                    <div className="coursesCard__text">
                        <p>John Ullmen</p>
                    </div>
                </div>
                <div className="courses">
                    <div className="coursesCard__heading">
                        <h5>2. The Six Morning Habits</h5>
                    </div>
                    <div className="coursesCard__text">
                        <p>Pete Mockaitis</p>
                    </div>
                </div>
                <div className="courses">
                    <div className="coursesCard__heading">
                        <h5>3. Critical Thinking</h5>
                    </div>
                    <div className="coursesCard__text">
                        <p>Becki Saltzman</p>
                    </div>
                </div>
                <div className="followCard__recommendations">
                    Show more on LinkedIn Learning
                    <img src={RightIcon} alt=""/>
                </div>
            </div>

            <div className="bannerCard">
                <img src="https:static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt=""/>
            </div>

        </div>
    )
}

export default HomeRightContent
