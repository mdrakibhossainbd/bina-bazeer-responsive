import React from 'react';
import '../../MainCSS/MainCSS.css';
import card1 from '../../../img/Screenshot_7.png';
import card2 from '../../../img/Screenshot_8.png';
import card3 from '../../../img/Screenshot_9.png';
import card4 from '../../../img/Screenshot_10.png';

const BazarSecondSection = () => {
    return (
        <div className="bazarSecondSection">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"><h2>Krishi bazaar</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

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
            </nav>
            <div className="container">


                <div className="row">
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card1} class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h6>MUTTON</h6>
                                <p class="mt-2"><del style={{ color: "red" }}> TK. 250 </del><strong style={{ color: "green" }}> TK. 180 </strong> </p>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary form-control mt-2"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card2} class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h6>FISH</h6>
                                <p class="mt-2"><del style={{ color: "red" }}> TK. 250 </del><strong style={{ color: "green" }}> TK. 180 </strong> </p>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary form-control mt-2"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card3} class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h6>BANANA</h6>
                                <p class="mt-2"><del style={{ color: "red" }}> TK. 250 </del><strong style={{ color: "green" }}> TK. 180 </strong> </p>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary form-control mt-2"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 collectionCart">
                        <div class="card card-container mt-3 ">
                            <img src={card4} class="card-img-top " alt="..." />
                            <div class="card-body">
                                <h6>GUAVA</h6>
                                <p class="mt-2"><del style={{ color: "red" }}> TK. 250 </del><strong style={{ color: "green" }}> TK. 180 </strong> </p>
                                <div className="d-flex justify-content-end">
                                    <button className="btn btn-primary form-control mt-2"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BazarSecondSection;