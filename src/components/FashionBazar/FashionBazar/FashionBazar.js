import React from 'react';
import '../../MainCSS/MainCSS.css';
import BazerLocation from '../../Home/BazerLocation/BazerLocation';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import FashionBazarSection from '../FashionBazarSection/FashionBazarSection';
import FashionSearchBar from '../FashionSearchBar/FashionSearchBar';
import MainFeatures from '../MainFeatures/MainFeatures';

const FashionBazar = () => {
    return (
        <div className="fashion">
            <Header></Header>
            <FashionSearchBar></FashionSearchBar>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <FashionBazarSection></FashionBazarSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default FashionBazar;