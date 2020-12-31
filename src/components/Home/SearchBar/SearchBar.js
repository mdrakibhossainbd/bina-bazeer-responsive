import React, {useState} from 'react';
import {NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import  MenuBarData from '../../Home/MenuBarData/MenuBarData'
import icon1 from '../../../img/icon1.PNG';
import icon2 from '../../../img/icon2.PNG';
import icon3 from '../../../img/icon3.PNG';
import icon4 from '../../../img/icon4.PNG';

import './SearchBar.css';
const SearchBar = () => {
    const[showSideBar, setShowSideBar] = useState(false) 
    const action = name => e => {
        e.preventDefault()
        setShowSideBar(!showSideBar)     
    }
  
    return (
        <div className=" mainHeader">
            <div className="container header2">
              

                <div className="row ">
                    <div className="header-logo ">
                        <Link className="title" to="/"><span className="title-one">bina</span> <span className="title-two">bazaar</span></Link>
                    </div>
                        <Link className="Bazeer-manubar-list " onClick={e => setShowSideBar(!showSideBar)}><i className="fa fa-bars" aria-hidden="true"></i></Link>
                        <div className="header-search ">
                                <input className="search-field" placeholder="Product Name..." style={{ borderRadius: "6px 0px 0px 6px", borderColor: "#9F9F9F", borderDecoration: "none", borderStyle: "solid" }} type="text">
                                  
                                </input>
                            </div>                            
                         <div className="header-search-icon d-flex align-items-center justify-content-center ">
                                {/* icon1 */}
                                <Link className="title"><span class="search-text" style={{ color: "white" }}>Search <i class="fa fa-search" aria-hidden="true"></i></span></Link>
                         </div>
                   {/* search bar icons  */}

                {/* test  */}
                   <div className="header__middleIcons  d-flex align-items-center ">
                        <Link to="/CardPage"> <img src={icon1} alt=""/><sup className="header__middleIconsSup">0</sup> </Link>
                        <Link to="/"> <img src={icon2} alt=""/><sup className="header__middleIconsSup">0</sup> </Link>
                        <Link to="/CustomerDashBoard"><img src={icon3} alt=""/></Link>
                        <Link to="/"> <img src={icon4} alt=""/></Link>
                    </div>

                   </div>
                    {/* header__menu starts */}
                 <div className={`${showSideBar ? "header__menu header__menuShow" : "header__menu"}`}>
                <div className="header__menuContent">
                   
                  
                    {
                        MenuBarData.map(m => (
                            
                            <Link className="dropdown-item" to={m.link}>{m.name}</Link>
                        ))
                    }

                </div>
            </div>
            {/* header__menu ends */}
            

            <div onClick={e => {setShowSideBar(!showSideBar)}} className={`${showSideBar ? "header__sidebarRightClose " : ""}`}></div>



           


            

           
            </div>
        </div>
    );
};

export default SearchBar;