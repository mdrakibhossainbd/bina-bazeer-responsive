import React, { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../../fakeData/';
import { Link } from 'react-scroll';
import './ShortInfo.css'
import { useEffect } from 'react';




const ShortInfo = () => {

//     const { slug } = useParams();
//     // const selectedProduct = fakeData.find(area => area.id === areaId);


//     // const { name, price } = selectedProduct;

// const [singleProduct,setSingleProduct] = useState({})


//     useEffect(()=>{

//         fetch(`http://localhost:3000/api/product/get-all-product-list/${slug}`)
//         .then( res => res.json())
//         .then( data => {
//             setSingleProduct(data);
//         })

//     },[]);

    // const descriptionSection = useRef(null);

    // const goToDescription = () => window.scrollTo({
    //     top: descriptionSection.current.offsetTop,
    //     behavior: 'smooth'
    // })

    return (
        <>
            <table>
                <tbody>
                    <tr className="product-info-group">
                        <td className="product-info-label">Price</td>
                        <td> 1500 <span style={{ fontSize: "20px" }}>৳</span></td>
                    </tr>
                    <tr className="product-info-group">
                        <td className="product-info-label">Status</td>
                        <td>In Stock</td>
                    </tr>
                    <tr className="product-info-group">
                        <td className="product-info-label">Product Code</td>
                        <td>3456</td>
                    </tr>
                    <tr className="product-info-group">
                        <td className="product-info-label">Brand</td>
                        <td> sadf </td>
                    </tr>
                </tbody>
            </table>
            <p>Banana is the most popular fresh fruit in all over the world. It has lots of
            variety. Chompa Banana is one of them. Chompa Bananas are comparatively
            smaller than the normal bananas. Bananas are great super food which
            provides us with energy, make us feel full and provide our body with essential
            nutrients and high amount of fiber. Banana is one of the high calorie tropical
            fruits. 100 grams of its flesh carries 90 calories. Besides, it contains good
            amount of health benefiting fiber, anti-oxidants, minerals, and vitamins.
            Bananas could help you to feel happier as they contain tryptophan, a type of
            protein that the body converts into serotonin, known to promote relaxation
            and improve mood.
            </p>

            <h3> <Link to="description" spy={true} smooth={true} duration={1000}>View More Info</Link> </h3>
        </>
    );
};

export default ShortInfo;