import React from 'react';
import ProductImages from '../ProductImages/ProductImages';
import ShortDetails from '../ShortDetails/ShortDetails';


const ProductTopPart = (props) => {

    const product = props.product;
    
    return (
        <div className="product-top-part">
            <div className="container mt-5 p-4" style={{ backgroundColor: "#fff" }}>
                <div className="row">
                    <div className="col-md-6">
                        <ProductImages product={product}  />
                    </div>
                    <div className="col-md-6">
                        <ShortDetails product={product} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductTopPart;