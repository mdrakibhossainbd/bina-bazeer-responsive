import React from 'react';
import BazerLocation from '../../Home/BazerLocation/BazerLocation';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import '../../MainCSS/MainCSS.css';
import MainFeatures from '../MainFeatures/MainFeatures';
import MudiBazarSection from '../MudiBazarSection/MudiBazarSection';
import MudiSearchBar from '../MudiSearchBar/MudiSearchBar';

const MudiBazar = () => {
    return (
        <div>
            <Header></Header>
            <MudiSearchBar></MudiSearchBar>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <MudiBazarSection></MudiBazarSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default MudiBazar;