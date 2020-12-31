import React from 'react';
import { Link } from 'react-router-dom';

const KrishiBazarSectionCard = (props) => {
    const { productName,primaryImage, slug,regularPrice, salePrice } = props.item;
    return (
        <div className="col-md-3 collectionCart">
            <div class="card card-container mt-3 ">
                <img src={primaryImage} class="card-img-top " alt="..." />
                <div class="card-body">
                    <h6> {productName} </h6>
                    <p class="mt-2"><del style={{ color: "red" }}> {regularPrice} </del><strong style={{ color: "green" }}> {salePrice} </strong> </p>
                    <Link to={`/singleProduct/${slug}`}>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary form-control mt-2"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default KrishiBazarSectionCard;