import React from 'react';
import { Link } from 'react-router-dom';

const MudiBazarSectionCard = (props) => {
    const { img, price, pastPrice, name, id } = props.cart;
    return (
        <div className="col-md-3 collectionCart">
            <div class="card card-container mt-3 ">
                <img src={img} class="card-img-top " alt="..." />
                <div class="card-body">
                    <h6> {name} </h6>
                    <p class="mt-2"><del style={{ color: "red" }}> {pastPrice} </del><strong style={{ color: "green" }}> {price} </strong> </p>
                    <Link to={`/singleProduct/${id}`}>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-primary form-control mt-2"><i class="fas fa-shopping-cart mr-2"></i>Add to Cart</button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MudiBazarSectionCard;