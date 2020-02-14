import React, { Component } from "react";
import Slider from "react-slick";
import About from './About';
import Exp from './Exp';
import Edu from './Edu';
import Hobby from './Hobby';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class ExpSlider extends Component {
  render() {
    const settings = {
        arrows:true,
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        lazyLoad: true,
        swipeToSlide: true,
        pauseOnHover: true
    };

    return (
        <div className="slider container">
            <Slider {...settings}>
                <div className="slider__about">
                    <About />
                </div>
                <div className="slider__exp">
                    <Exp />
                </div>
                <div className="slider__edu">
                    <Edu />
                </div>
                <div className="slider__hobby">
                    <Hobby />
                </div>
            </Slider>
        </div>
    );
  }
}