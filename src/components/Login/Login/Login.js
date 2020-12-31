import React from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import SearchBar from '../../Home/SearchBar/SearchBar';
import LoginBody from '../LoginBody/LoginBody';

const Login = () => {
    return (
        <div>
            <Header></Header>
            <SearchBar></SearchBar>
            <LoginBody></LoginBody>
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default Login;