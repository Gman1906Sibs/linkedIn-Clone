import React from 'react';
import './Login.css';
import HomeIMG from '../images/login-hero.svg'
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slide from "./SimpleSlider";
import IMG4 from '../images/lin4.svg';
import IMG5 from '../images/lin5.svg';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import YoutubeEmbed from "./YoutubeEmbed";
import Logo from '../images/login-logo.svg'
import LoginTags from './LoginTags';


function Login() {
    return (
        <div className="home__topContainer">
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
            <div className='home'>
                <div className="home__hero">
                    <div className="home__heading">
                        <h1>Welcome to your professional community</h1>
                    </div>
                    <div className="home__options">
                        <Button variant='outlined' className='home__optionsBtn'>
                            Search for a job
                            <small className='home__heroArrow'><ArrowForwardIosIcon/></small>
                        </Button>
                        <Button variant='outlined' className='home__optionsBtn'>
                            Find a person you know
                            <small className='home__heroArrow'><ArrowForwardIosIcon/></small>
                        </Button>
                        <Button variant='outlined' className='home__optionsBtn'>
                            Learn a new skill
                            <small className='home__heroArrow'><ArrowForwardIosIcon/></small>
                        </Button>
                    </div>
                    
                    <img src={HomeIMG} alt=""/>
                </div>
                <div className="home__jobs">
                    <div className="home__jobsOne">
                        <p>Find open jobs and internships</p>
                    </div>
                    <div className="home__jobsTwo">
                        <div className="home__jobsTwoHeading">
                            <h3>SUGGESTED SEARCHES</h3>
                        </div>
                        <div className="home__jobsTwoButtons">
                            <Button className='home__jobsBtn'>
                                    Engineering
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Business Development
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Finance
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Administratice Assistant
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Retail Associate
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Customer Service
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Operations
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Information Technology
                            </Button>
                            <Button className='home__jobsBtn'>
                                    EngineerMarketinging
                            </Button>
                            <Button className='home__jobsBtn'>
                                    Human Resources
                            </Button>
                        </div>
                        <div className="home__jobsTwoShow">
                            <p>
                                Show more 
                            </p>
                            <small className='home__jobsTwoShowArrow'>
                                <ExpandMoreIcon/>
                            </small>
                        </div>
                    </div>
                </div>    
            </div>
            <div className="home__postJob">
                <div className="home">
                    <div className="home__postJobOne">
                        <h1>Post your job and find the people you need</h1>
                    </div>
                    <div className="home__postJobTwo">
                        <Button className='home__postBtn' variant='outlined'>
                            Post a job
                        </Button>
                    </div>

                    <div className="home__slider">
                        <Slide />
                    </div>
                </div>
            </div>
            <div className="home__connectContainer">
                <div className="home">
                    <div className="home__connect">
                        <div className="home__people">
                            <img src={IMG4} alt=""/>
                            <h1>Connect with people who can help</h1>
                            <Button variant='outlined' className='home__connectBtnOne'>
                                    Find people you know
                            </Button>
                        </div>
                        <div className="home__people">
                            <img src={IMG5} alt=""/>
                            <h1>Learn the skills that can help you now</h1>
                            <Button variant='outlined' className='home__connectBtnTwo'>
                                    Choose a topic to learn about <ArrowDropDownIcon className='home__small' />
                            </Button>
                        </div>
                    </div>
                    <div className="home__video">
                        <div className="home__videoBackground"/>
                        <h1>Let's step forward</h1>
                        <p>With our communities by our side, there's no telling where our next small steps could lead</p>
                        <YoutubeEmbed className='home__videoVideo' embedId="EEikRQ58NwM" />
                    </div>
                </div>
            </div>
            <div className="home">
                <div className="home__bottom">
                    <div className="home__bottomLogo">
                        <img src={Logo} alt=""/>
                    </div>
                    <div className="home__bottomTags">
                        <div className="home__bottomTag">
                            <LoginTags 
                                heading= 'General'
                                tag1= 'Sign Up'
                                tag2= 'Help Center'
                                tag3= 'About'
                                tag4= 'Press'
                                tag5= 'Blog'
                                tag6= 'Careers'
                                tag7= 'Developers'
                            />
                        </div>

                        <div className="home__bottomTag">
                            <LoginTags 
                                heading= 'Browse LinkedIn'
                                tag1= 'Learning'
                                tag2= 'Jobs'
                                tag3= 'Salary'
                                tag4= 'Mobile'
                                tag5= 'Services'
                            />
                        </div>

                        <div className="home__bottomTag">
                            <LoginTags  
                                heading= 'Business Solutions'
                                tag1= 'Talent'
                                tag2= 'Marketing'
                                tag3= 'Sales'
                                tag4= 'Learning'
                            />
                        </div>

                        <div className="home__bottomTag">
                            <LoginTags  
                                heading= 'Directories'
                                tag1= 'Members'
                                tag2= 'Jobs'
                                tag3= 'Companies'
                                tag4= 'Salaries'
                                tag5= 'Featured'
                                tag6= 'Learning'
                                tag7= 'Posts'
                                tag8= 'Articles'
                                tag9= 'Schools'
                                tag10= 'News'
                                tag11= 'News Letter'
                                tag12='Services'
                                tag13='Interview Prep'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="home__connectContainer">
                <div className="home">
                    <div className="home__footer">
                        <img src="https://www.pngkey.com/png/full/223-2238769_linkedin-logo-black-png-clip-art-linkedin-black.png" alt=""/>
                        <h5>©️ 2021</h5>
                        <p>About</p>
                        <p>Accessibility</p>
                        <p>User Agreement</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Policy</p>
                        <p>Copyright Policy</p>
                        <p>Brand Policy</p>
                        <p>Guest Controls</p>
                        <h6>This is a LinkedIn CLONE designed by Gman Sibs</h6>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login
