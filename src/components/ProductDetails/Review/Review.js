import React from 'react';
import Rating from '../Rating/Rating';
import './Review.css'

const Review = () => {
    return (
        <div className="single-reviews">
            <h4>SR Sohan</h4>
            <Rating></Rating>
            <p className="text-left"> This is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s</p>
        </div>
    );
};

export default Review;