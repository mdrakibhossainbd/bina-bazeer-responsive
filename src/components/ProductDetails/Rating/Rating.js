import React from 'react';
import './Rating.css'

const Rating = () => {
    return (
        <div className="rating">
            <span className="fa fa-star cheked"></span>
            <span className="fa fa-star cheked"></span>
            <span className="fa fa-star cheked"></span>
            <span className="fa fa-star"></span>
            <span className="fa fa-star"></span>
        </div>
    );
};

export default Rating;