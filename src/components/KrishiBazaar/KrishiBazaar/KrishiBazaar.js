import React from 'react';
import BazerLocation from '../../Home/BazerLocation/BazerLocation';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import SearchBar from '../../Home/SearchBar/SearchBar';
import '../../MainCSS/MainCSS.css';
import KrishiBazarSection from '../KrishiBazarSection/KrishiBazarSection';
import KrishiSearchBar from '../KrishiSearchBar/KrishiSearchBar';
import MainFeatures from '../MainFeatures/MainFeatures';



const KrishiBazaar = () => {





    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <MainFeatures></MainFeatures>
            <BazerLocation></BazerLocation>
            <KrishiBazarSection></KrishiBazarSection>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default KrishiBazaar;