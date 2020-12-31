import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../../fakeData/';
import Quantity from '../Quantity/Quantity';
import Rating from '../Rating/Rating';
import ShortInfo from '../ShortInfo/ShortInfo';
import SocialShare from '../SocialShare/SocialShare';

const ShortDetails = (props) => {
    console.log(props.product);
    
    const propsData = props.product ? props.product : {}; 

    return (
        <div className="short-details-area px-4">
            <div className="short-info">
                <h2 > {propsData.productName} </h2>
                {/* <ShortInfo></ShortInfo> */}

                <table>
                    <tbody>
                        <tr className="product-info-group">
                            <td className="product-info-label">Price</td>
                            <td> {propsData.salePrice} <span style={{ fontSize: "20px" }}>৳</span></td>
                        </tr>
                        <tr className="product-info-group">
                            <td className="product-info-label">Status</td>
                            <td>{ propsData.quantity > 0 ?"In Stock" : "Out of Stock"}</td>
                        </tr>
                        <tr className="product-info-group">
                            <td className="product-info-label">Product Code</td>
                            <td>{propsData.productCode}</td>
                        </tr>
                        <tr className="product-info-group">
                            <td className="product-info-label">Brand</td>
                            <td> {propsData.brand} </td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    {propsData.shortDecs}
                </p>

                <h3> <Link to="description" spy={true} smooth={true} duration={1000}>View More Info</Link> </h3>

            </div>
            <div className="rating-count d-flex align-items-center mb-3">
                <div className="total-rating">
                    1 Customer Review
                </div>
                <Rating />
            </div>
            <Quantity />
            <SocialShare />
        </div>
    );
};

export default ShortDetails;