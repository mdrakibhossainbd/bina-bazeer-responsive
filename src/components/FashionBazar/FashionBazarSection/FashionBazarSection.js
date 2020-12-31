import React, { useState } from 'react';
import fakeData from '../../../fakeData/fashion';
import FashionBazarSectionCard from '../FashionBazarSectionCard/FashionBazarSectionCard';

const FashionBazarSection = () => {
    const bazer = fakeData;
    const [cart, setCart] = useState(bazer);
    
    return (
        <div className="bazarFirstSection">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"><h2>Fashion bazaar</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Men collection <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Women collection</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Winter collection</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Summer collection</a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div className="container">

                <div className="row">
                    {
                        cart.map(cart => <FashionBazarSectionCard cart={cart} ></FashionBazarSectionCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default FashionBazarSection;