import React from 'react';
import './Home.css';
import HomeIMG from '../images/login-hero.svg'
import { Button } from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Home() {
    return (
        <div className="home__topContainer">
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
                </div>
            </div>
        </div>
        
    )
}

export default Home
