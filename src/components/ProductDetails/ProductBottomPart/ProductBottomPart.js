import React, { useState } from 'react';
import AddReview from '../AddReview/AddReview';
import Description from '../Description/Description';
import NavTab from '../NavTab/NavTab';
import RelativeProducts from '../RelativeProducts/RelativeProducts';
import Review from '../Review/Review';

const ProductBottomPart = (props) => {

    const propsData = props.product ? props.product : {};   
    const [addReview, setAddReview] = useState(false);


    return (
        <div className="product-bottom-area">
            <div className="container" >
                <div className="row">
                    <div className="col-md-9 ">
                        <div className="description-area mt-5 pb-4" style={{ backgroundColor: "#fff" }}>
                            <NavTab />
                            <div id="description" className="description-content">
                                <h3 className="heading-common">Description:</h3>
                                <p>
                                    {propsData.desc}
                                </p>

                                {/* <div className="video-area mt-5">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=mDfTl8cYh-Q&ab_channel=TheAjairaLTD."
                                        controls
                                        playbackRate={1}
                                        width="100%"
                                        height="100%"
                                    />

                                </div> */}
                            </div>
                        </div>
                        <div id="reviews" className="review-area mt-4 p-3" style={{ backgroundColor: "#fff" }}>
                            <h3 className="heading-common">Reviews(1):</h3>
                            <Review />
                        </div>
                        <div className="add-review-area mt-4" style={{ backgroundColor: "#fff" }} >

                            <button onClick={() => setAddReview(!addReview)} className="add-review-btn m-4">{addReview ? "Close" : "Add"} Review</button>
                            {
                                addReview && <AddReview />
                            }
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="relative-products mt-5">
                            <h3>Relative Products</h3>
                            <RelativeProducts />
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ProductBottomPart;