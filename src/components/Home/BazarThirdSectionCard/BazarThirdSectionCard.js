import React from 'react';

const BazarThirdSectionCard = (props) => {
    const { img, name } = props.cart;
    return (
        <div className="col-md-3 collectionCart">
            <div class="card card-container mt-3 ">
                <img src={img} class="card-img-top " alt="..." />
                <div class="card-body">
                    <h4> {name} </h4>
                </div>
            </div>
        </div>
    );
};

export default BazarThirdSectionCard;