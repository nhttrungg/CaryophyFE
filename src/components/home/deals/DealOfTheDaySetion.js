import React from 'react';
import DealProductCard from './DealProductCard';
import SectionTitle from "./SectionTitle";

const dealProducts = [
    {
        name: 'DJI Phantom Drone 4k',
        img: 'images/product/electronic/product11.jpg',
        countdown: '2020/05/01',
        price: '$125.00',
        discount: '$160.00',
    },
    {
        name: 'DJI Phantom Drone 2k',
        img: 'images/product/electronic/product12.jpg',
        countdown: '2020/05/01',
        price: '$125.00',
        discount: '$160.00',
    },
];

const DealOfTheDaySection = () => (
    <div className="u-s-p-b-60">
        <SectionTitle
            heading="DEAL OF THE DAY"
            spans={[
                'BUY DEAL OF THE DAY, HURRY UP! THESE NEW PRODUCTS WILL EXPIRE SOON.',
                'ADD THESE ON YOUR CART.',
            ]}
        />
        <div className="section__content">
            <div className="container">
                <div className="row">
                    {dealProducts.map((product, idx) => (
                        <DealProductCard product={product} key={idx} />
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default DealOfTheDaySection;