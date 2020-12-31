import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Home/Header/Header';
import Pay from '../../Home/Pay/Pay';
import SearchBar from '../../Home/SearchBar/SearchBar';
import ProductBottomPart from '../ProductBottomPart/ProductBottomPart';
import ProductTopPart from '../ProductTopPart/ProductTopPart';

const ProductDetails = () => {

    const { slug } = useParams();
   


    useEffect(()=>{

        fetch(`http://api.binabazaar.com/api/product/get-single-product-by-slug/${slug}`)
        .then( res => res.json())
        .then( data => {
            setSingleProduct(data);
        })

    },[]);


    const [singleProduct,setSingleProduct] = useState({})


    return (
        <div className="product-details-area">
            <Header></Header>
            <SearchBar></SearchBar>
            <ProductTopPart product={singleProduct.data} />
            <ProductBottomPart product={singleProduct.data}  />
            <Footer></Footer>
            <Pay></Pay>
        </div>
    );
};

export default ProductDetails;