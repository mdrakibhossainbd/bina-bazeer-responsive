import React from 'react';
import './Quantity.css'

const Quantity = () => {



    const handleQuantity = (isAdding) => {

        const productPrice = document.getElementById('product-price');
        const productPriceValue = productPrice.innerText;

        const productInput = document.getElementById('product-count');
        const productInputValue = parseInt(productInput.value);

        let newInputValue = productInputValue;

        if (isAdding) {
            newInputValue = productInputValue + 1;
            productPrice.innerText = 8500 * newInputValue;
        }
        if (!isAdding && productInputValue > 1) {
            newInputValue = productInputValue - 1;
            productPrice.innerText = productPriceValue - 8500;
        }
        productInput.value = newInputValue;

    }


    return (
        <div className="quantity-area">
            <ins > <span id="product-price">8,500</span><span className="taka">৳</span></ins>

            <div className="quantity-flex">
                <div className="product-quantity mt-4">
                    <span className="ct1" onClick={() => handleQuantity(false)}>
                        <i className="fa fa-minus"></i>
                    </span>
                    <span className="qty">
                        <input id="product-count" type="text" name="" defaultValue="1" />
                    </span>
                    <span className="ct1" onClick={() => handleQuantity(true)} >
                        <i className="fa fa-plus"></i>
                    </span>
                </div>
                <div className="d-flex">
                    <div className="buyNow-btn d-flex align-items-center mt-4">
                        <i className="fa fa-shopping-cart"></i>
                        <button>Buy Now</button>
                    </div>
                    <div className="wish-list mt-4">
                        <ul className="d-flex align-items-center">
                            <li>
                                <i className="fa fa-heart"></i>
                            </li>
                            <li>
                                <i className="fa fa-shopping-cart"></i>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Quantity;