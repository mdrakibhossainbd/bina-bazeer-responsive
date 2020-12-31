import React from 'react';
// import ReactPlayer from 'react-player';
import './Description.css';

const Description = () => {
    return (
        <div id="description" className="description-content">
            <h3 className="heading-common">Description:</h3>
            <p>Binabazar.com is an online shop in Dhaka, Bangladesh. We believe time is valuable to our fellow Dhaka residents, and that they should not
            have to waste hours in traffic, brave bad weather and wait in line just to buy basic necessities like eggs! This is why Halaldokan delivers
            everything you need right at your door-step and at no additional cost.
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
    );
};

export default Description;