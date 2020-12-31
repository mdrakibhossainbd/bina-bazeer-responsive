import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import SearchBar from '../../Home/SearchBar/SearchBar';
import RegistrationBody from '../RegistrationBody/RegistrationBody';

const Registration = () => {
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <RegistrationBody></RegistrationBody>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default Registration;