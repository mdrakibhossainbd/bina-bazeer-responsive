import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import '../../MainCSS/MainCSS.css';
import './Header.css';

const Header = () => {

    const [loginUser, setLoginUser] = useContext(UserContext);

    return (
        <div className="header" >
            {/* Top Bar Section Start  */}

            <div className="topSection ">
                <div className="container">
                    <div className="d-flex justify-content-between  align-items-center">
                        <p ><i className="fa fa-phone" aria-hidden="true"></i> <small className="number-text">01748686269 (10PM - 5PM)</small> </p>
                        <marquee className="marqu-text" width="60%" direction="left" height="30%">
                            <h5>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, adipisci.</h5>
                        </marquee>

                        {
                            loginUser.userInfo ? loginUser.userInfo.firstName :<Link className="text-white " to="/registration">
                            <small> Registration </small>
                         </Link>
                        }

                         |
                        { !loginUser.userInfo ? <Link className="text-white" to="/login"> 
                            <small> Login</small>
                         </Link> :<small onClick={()=>localStorage.removeItem('userToken')}>Log Out</small>}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;