import React from 'react';
import './AddReview.css'

const AddReview = () => {
    return (
        <div className="add-review-area">
            <h1 className="heading-common">Write Review: </h1>
            <form>
                <div className="mb-2">
                    <input type="text" className="form-control" placeholder="Your Name" />
                </div>
                <div className="mb-2">
                    <input type="email" className="form-control" placeholder="Your Email" />
                </div>
                <div className="mb-2">
                    <textarea className="form-control text-area" name="" id="" cols="30" rows="5" placeholder="Write review"></textarea>
                </div>

                <div className="">

                    <div className="set-rating d-flex align-items-center mt-3">
                        <span className="rating-heading">Rating:</span>
                        <span>Bad</span>
                        <span><input type="radio" name="rating" value="1" /></span>
                        <span><input type="radio" name="rating" value="2" /></span>
                        <span><input type="radio" name="rating" value="3" /></span>
                        <span><input type="radio" name="rating" value="4" /></span>
                        <span><input type="radio" name="rating" value="5" /></span>
                        <span>Good</span>
                    </div>
                    <button className="review-add-btn mt-4">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;