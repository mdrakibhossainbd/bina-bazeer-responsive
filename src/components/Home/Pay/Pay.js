import React from 'react';
import './Pay.css';
import bkash from '../../../img/bkash.png';
import rocket from '../../../img/rocket.png';
import dbbl from '../../../img/cc-dbbl.png';
import master from '../../../img/Page-1_1_.png';
import visa from '../../../img/Page-1.png';
import ex from '../../../img/Page-1_2_.png';
import cashon from '../../../img/cash-on-delivery.png';

const Pay = () => {
    return (
        <div className="pay-background">
            <div className="container pay">
            <div className="text-center">
                <h2 className="text-center" style={{color:"#2E2E2E"}}>Pay With</h2>
                {/* <img src={pay} alt="" />E
                 */}
                 <div className="container d-flex justify-content-center">
                    
                     <div className="image-siz-set"><img src={bkash} alt=""/></div>
                     <div className="image-siz-set"><img src={rocket} alt=""/></div>
                     <div className="image-siz-set"><img src={dbbl} alt=""/></div>
                     <div className="image-siz-set"><img src={master} alt=""/></div>
                     <div className="image-siz-set"><img src={visa} alt=""/></div>
                     <div className="image-siz-set"><img src={ex} alt=""/></div>
                     <div className="image-siz-set"><img src={cashon} alt=""/></div>
                 </div>
                <p style={{color:"#2E2E2E", paddingTop:"20px"}}>Copyright © 2020 R One Computer Limited. All Rights Reserved.</p>
            </div>
        </div>
        </div>
    );
};

export default Pay;