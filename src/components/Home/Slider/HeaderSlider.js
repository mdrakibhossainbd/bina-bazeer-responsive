import React from 'react';

import '../../MainCSS/MainCSS.css';
import image1 from '../../../img/slide1.jpg';
import image2 from '../../../img/slide2.jpg';
import image3 from '../../../img/slide2.jpg';

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../../MainCSS/MainCSS.css';

const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
}

const HeaderSlider = () => {
    return (
        <div className="slider-size">
            
            {/* <img src={slider1} alt=""/> */}
            <Slider {...settings}>
                <div>
                <img src={image1} alt=""/>
                </div>
                <div>
                <img src={image2} alt=""/>
                </div><div>
                <img src={image3} alt=""/>
                </div>
                </Slider>
            

        </div>
    );
};

export default HeaderSlider;