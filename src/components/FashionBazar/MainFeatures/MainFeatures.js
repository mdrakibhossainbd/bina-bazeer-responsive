import React from 'react';
import '../../MainCSS/MainCSS.css';
import main from '../../../img/fashionMain.png';
import f1 from '../../../img/f1.png';
import f2 from '../../../img/f2.png';
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
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">

                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                <ul className="navbar-nav">
                                    <p> <i className="fa fa-bars" aria-hidden="true"></i> Category</p>
                                    <div className="underLine"></div>
                                    <li className="nav-item ">
                                        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/krishiBazaar">Krishi Bazaar</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/mudiBazaar">Mudi Bazaar</a>
                                    </li>
                                    <li className="nav-item active">
                                        <a className="nav-link" href="/fashionBazaar">Fashion Bazaar</a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="col-md-6 mainFashion">
                        <img src={main} alt="" />
                    </div>

                    <div className="col-md-4 sideFashion">
                        <div className="col-md-12">
                            <img src={f1} alt="" />
                        </div>
                        <div className="col-md-12 mt-2">
                            <img src={f2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainFeatures;