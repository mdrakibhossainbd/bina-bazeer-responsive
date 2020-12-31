import React from 'react';
import { Link } from 'react-router-dom';
import '../../MainCSS/MainCSS.css';

import boxicon from '../../../img/boxicon.PNG';
import caricon from '../../../img/caricon.PNG';
import dollaricon from '../../../img/dollericon.PNG';
import usericon from '../../../img/customericon.PNG';

const CustomerSupport = () => {
    return (
        <div className="customer-support d-flex flex-row">
            <div className="customer-box-size">
                <img src={boxicon} alt=""/><span className="text-change">Bonus Plus</span>
            </div>
            <div className="customer-box-size">
                <img src={caricon} alt=""/><span className="text-change">Free Shipping</span>
            </div><div className="customer-box-size">
                <img src={dollaricon} alt=""/><span className="text-change">Money Back</span>
            </div><div className="customer-box-size">
                <img src={usericon} alt=""/><span className="text-change">Customer Support</span>
            </div>
            
        </div>
    );
};

export default CustomerSupport;