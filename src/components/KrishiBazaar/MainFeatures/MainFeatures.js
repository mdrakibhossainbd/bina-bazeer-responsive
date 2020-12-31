import React from 'react';
import '../../MainCSS/MainCSS.css';
import img1 from '../../../img/Screenshot_1.png';
import img2 from '../../../img/Screenshot_2.png';
import img3 from '../../../img/Screenshot_3.png';
import img4 from '../../../img/Screenshot_4.png';
import img5 from '../../../img/Screenshot_5.png';

const MainFeatures = () => {
    return (
        <div className="mainFeatures">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                    <nav class="app_navigation">
                                <p> <i className="fa fa-bars" aria-hidden="true"></i> Category</p>
                                <div className="underLine"></div>

                                <ul className="navbar-nav">                                    
                                    
                                    <li className="nav-item active">
                                        <a className="nav-link" href="#">কৃষি বাজার <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">মুদি বাজার</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ফ্যাশন বাজার</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">পুস্টি বাজার </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">কাপড় বাজার</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">নির্মান বাজার</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">মেডিসিন বাজার</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">বই বাজার </a>
                                    </li>

                                </ul>
                        </nav>
                    </div>
                    <div className="col-md-3">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="sm_img" src={img2} alt="" />
                            </div>
                            <div className="col-md-12 mt-3">
                                <img className="sm_img" src={img3} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <img className="img1" src={img1} alt="" />
                    </div>
                    <div className="col-md-3">
                        <div className="col-md-12">
                            <img className="sm_img" src={img4} alt="" />
                        </div>
                        <div className="col-md-12 mt-3">
                            <img className="sm_img" src={img5} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFeatures;