import React, { useState } from 'react';
import fakeData from '../../../fakeData/mudi';
import MudiBazarSectionCard from '../MudiBazarSectionCard/MudiBazarSectionCard';

const MudiBazarSection = () => {
    const bazer = fakeData;
    const [cart, setCart] = useState(bazer);
    
    return (
        <div className="bazarFirstSection">
            <nav class="navbar navbar-expand-lg navbar-light ">
                <a class="navbar-brand" href="#"><h2>Mudi bazaar</h2></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Rice <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Oil</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Moida</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sugar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Milk</a>
                        </li>
                    </ul>

                </div>
            </nav>
            <div className="container">

                <div className="row">
                    {
                        cart.map(cart => <MudiBazarSectionCard cart={cart} ></MudiBazarSectionCard>)
                    }

                </div>

            </div>
        </div>
    );
};

export default MudiBazarSection;