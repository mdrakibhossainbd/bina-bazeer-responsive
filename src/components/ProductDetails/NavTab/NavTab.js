import React from 'react';
import { Link } from 'react-scroll';
import './NavTab.css'

const NavTab = () => {
    return (
        <div className="nav-tab d-flex align-items-center">
            <li> <Link to="description" spy={true} smooth={true} duration={500}>Description</Link> </li>
            <li> <Link to="reviews" spy={true} smooth={true} duration={500}>Reviews(1)</Link> </li>
        </div>
    );
};

export default NavTab;