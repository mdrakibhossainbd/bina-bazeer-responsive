import React from 'react';
import './Footer.css';
import logo from '../../../img/Screenshot_6.png';
import facebook from '../../../img/Screenshot_11.png';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container ">
                <div className="row">



                    <div className="col-md-3 logoSection">
                        <img src={logo} className="img-fluid" alt="" />
                        <div>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-instagram"></i>
                            <i class="fab fa-youtube"></i>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p> <i className="fa fa-phone" aria-hidden="true"></i> +8801748686269 +8801316036768</p>
                        <p> <i class="fa fa-map-marker" aria-hidden="true"></i> 3/4 Avenue-5, Block-A, Section-6, Mirpur, Dhaka-1216</p>
                        <p> <i class="fa fa-envelope" aria-hidden="true"></i> info@binabazaar.com</p>

                    </div>





                    <div className="col-md-3">
                        <h5>Order Procedure</h5>
                        <p>Return & Refund</p>
                        <p>Policy</p>
                        <p> Payment Method </p>
                        <p>
                            Terms & Conditions </p>
                        <p>Privacy Policy</p>
                    </div>
                    <div className="col-md-2">

                        <h5>Facebook Page</h5>
                        <img className="img-fluid" src={facebook} alt="" />
                    </div>



                </div>
            </div>
        </div>
    );
};

export default Footer;








