import React from 'react';
import './RelativeProducts.css'
import capImg from '../../../img/Screenshot_6.png';

const RelativeProducts = () => {
    return (
        <div className="single-relative-products d-flex align-items-center">
            <div className="image-holder">
                <img src={capImg} alt="" />
            </div>
            <div className="caption">
                <h4>Mutton</h4>
                <p>8,500<span style={{ fontSize: '22px' }}>৳</span> </p>
            </div>
        </div>
    );
};

export default RelativeProducts;