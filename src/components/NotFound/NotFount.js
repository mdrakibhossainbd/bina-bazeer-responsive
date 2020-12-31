import React from 'react';
import { Link } from 'react-router-dom';

const NotFount = () => {
    return (
        <div className="text-center">
            <h1>Not Found <span style={{ color: 'red' }} >404</span> </h1>
            <p> please try again right path</p>

            <Link to="/home">
                <button className="btn btn-primary"> please Return Home Page </button>
            </Link>
        </div>
    );
};

export default NotFount;