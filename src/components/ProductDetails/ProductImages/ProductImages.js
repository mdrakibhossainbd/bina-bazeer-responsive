import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ProductImages.css";






const ProductImages = (props) => {

  const propsData = props.product ? props.product : {};    
  

  return (
    <div className="product-images-area ">
      <div className="big-img py-4">
        <img src={propsData.primaryImage}  className="img-fluid" alt="" />
      </div>
      <div className="short-img mt-5">
        {/* <Slider {...settings}> */}

        {/* <div className="single-img">
            <img src={img} alt="" />
          </div> */}
        {/* <div className="single-img">
            <img src={img} alt="" />
          </div> */}
        {/* <div className="single-img">
            <img src={bigImg} alt="" />
          </div>
          <div className="single-img">
            <img src={bigImg} alt="" />
          </div> */}
        {/* </Slider> */}
        <div className="row">
          { propsData.productImages && propsData.productImages.map( img => <div className="col-md-6">
            <img src={img} alt="" />
          </div>)}


          {/* <div className="col-md-6">
            <img  alt="" />
          </div> */}
        </div>

      </div>
    </div>
  );
};

export default ProductImages;