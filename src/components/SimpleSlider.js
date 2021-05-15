import React, { Component } from "react";
import Slider from "react-slick";
import './SimpleSlider.css';
import IMG1 from '../images/lin1.png';
import IMG2 from '../images/lin2.png';
import IMG3 from '../images/lin3.png';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slide__main">
        <div className='slide'>
          <Slider {...settings}>
            <div className='slide__component'>
              <div className="slide__text">
                <h1>Let the right people know you’re open to work</h1>
                <p>With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn community that you are looking for new job opportunities</p>
              </div>
              <div className="slide__img">
                <img src={IMG1} alt=""/>
              </div>
            </div>
            <div className='slide__component'>
              <div className="slide__text">
                <h1>Conversations today could lead to opportunity tomorrow</h1>
                <p>Sending messages to people you know is a great way to strengthen relationships as you take the next step in your career</p>
              </div>
              <div className="slide__img">
                <img src={IMG2} alt=""/>
              </div>
            </div>
            <div className='slide__component'>
              <div className="slide__text">
                <h1>Stay up to date on your industry</h1>
                <p>From Live videos, to stories, to newsletters and more, LinkedIn is full of ways to stay up to date on the latest discussions in your industry</p>
              </div>
              <div className="slide__img">
                <img src={IMG3} alt=""/>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}