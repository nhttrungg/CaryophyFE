import React from 'react';
import SlideItem from "./SliderItem";
import Carousel from "../../common/Carousel";

const HeroSlider = () => {


    const slides = [
        {
            id: 1,
            imageUrl: '/images/slider1.jpg',
        },
        {
            id: 2,
            imageUrl: '/images/slider2.jpg',
        },
        {
            id: 3,
            imageUrl: '/images/slider3.jpg',
        },
        {
            id: 4,
            imageUrl: '/images/slider4.jpg',
        },
        {
            id: 5,
            imageUrl: '/images/slider5.jpg',
        },
        {
            id: 6,
            imageUrl: '/images/slider6.jpg',
        }
    ];

    return (
            <Carousel autoPlay={true} interval={5000}>
                {slides.map(slide => (
                    <SlideItem key={slide.id} {...slide} />
                ))}
            </Carousel>
    );
};

export default HeroSlider;