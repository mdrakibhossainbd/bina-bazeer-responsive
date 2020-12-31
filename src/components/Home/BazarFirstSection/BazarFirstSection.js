import React from 'react';
import '../../MainCSS/MainCSS.css';
import card1 from '../../../img/Screenshot_7.png';
import card2 from '../../../img/Screenshot_8.png';
import card3 from '../../../img/Screenshot_9.png';
import card4 from '../../../img/Screenshot_10.png';
import { Link } from 'react-router-dom';

const BazarFirstSection = ({title}) => {
    return (
        <div className="bazarFirstSection">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                <Link class="navbar-brand" to="/krishiBazaar"><h4>{title}</h4></Link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rice <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Vegetable</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fruits</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Fish</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Meat</a>
                        </li>
                    </ul>

                </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card1} class="card-img-top " alt="..." />
                            <div class="card-body text-center">
                                <h6>MUTTON</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card2} class="card-img-top " alt="..." />
                            <div class="card-body text-center">
                                <h6>FISH</h6>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card3} class="card-img-top " alt="..." />
                            <div class="card-body text-center">
                                <h6>BANANA</h6>                                
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card4} class="card-img-top " alt="..." />
                            <div class="card-body text-center">
                                <h6>GUAVA</h6>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BazarFirstSection;