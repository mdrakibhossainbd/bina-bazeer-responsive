import React from 'react';
import './CustomerDashBoard.css'

import {Link} from 'react-router-dom'

import home from '../../assets/icons/home.svg'
import rightArrow from '../../assets/icons/right-arrow.svg'
import edit from '../../assets/icons/edit.svg'
import password from '../../assets/icons/password.svg'
import location from '../../assets/icons/location.svg'
import wishlist from '../../assets/icons/wishlist.svg'

import cloudComputing from '../../assets/icons/cloud-computing.svg'
import taskList from '../../assets/icons/task-list.svg'
import future from '../../assets/icons/future.svg'
import returnArrow from '../../assets/icons/returnArrow.svg'
import transaction from '../../assets/icons/transaction.svg'

const CustomerDashBoard = () => {
    return (
        <div className="dashboard">
            <div className="dashboard__container">
            {/* dashboardHeader starts */}
            <div className="dashboard__header ">
                <Link to="/"><img  src={home} alt=""/></Link>              
                <img className="dashboard__headerArrowIcon" src={rightArrow} alt=""/>
                <Link to="#">ACCOUNT</Link>
            </div>
            {/* dashboard__header ends */}

            {/* dashboard__headline starts */}
                <div className="dashboard__headline">MY ACCOUNT</div>
            {/* dashboard__headline ends */}
        
            <div className="dashboard__content">
                <div className="dashboard__left">
                    <div className="dashboard__leftTop">
                        <Link to="#" className="dashboard__leftItem">
                            <img src={edit} alt=""/>
                            <p>Edit your account information</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={password} alt=""/>
                            <p>Change your password</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={location} alt=""/>
                            <p>Modify your address book entries</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={wishlist} alt=""/>
                            <p>Modify your wish list</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={returnArrow} alt=""/>
                            <p>Logout</p>
                        </Link>
                    </div>
                    <h3>MY ORDERS</h3>
                    <div className="dashboard__leftBottom">
                        <Link to="#" className="dashboard__leftItem">
                            <img src={taskList} alt=""/>
                            <p>View your order history</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={cloudComputing} alt=""/>
                            <p>Downloads</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={future} alt=""/>
                            <p>Recurring payments</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={returnArrow} alt=""/>
                            <p>View your return requests</p>
                        </Link>
                        <Link to="#" className="dashboard__leftItem">
                            <img src={transaction} alt=""/>
                            <p>Your Transactions</p>
                        </Link>
                    </div>
                </div>
                <div className="dashboard__right">
                    <h3>ACCOUNT MENU</h3>
                    <div className="dashboard__rightList">
                        <Link className="link-deco" to ="#"> <img src={rightArrow} alt=""/> MY ACCOUNT</Link>
                        <Link to ="#"> <img src={rightArrow} alt=""/> ADDRESS BOOK</Link>
                        <Link to ="#"> <img src={rightArrow} alt=""/> WISHLIST</Link>
                        <Link to ="#"> <img src={rightArrow} alt=""/> ORDER HISTORY</Link>
                        <Link to ="#"> <img src={rightArrow} alt=""/> RETURNS</Link>
                        <Link to ="#"> <img src={rightArrow} alt=""/> TRANSACTIONS</Link>
                        <Link to ="#"> <img src={rightArrow} alt=""/> NEWSLETTER</Link>
                    </div>
                </div>
               
            </div>




            </div>
        </div>


    );
};

export default CustomerDashBoard;