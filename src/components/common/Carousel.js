// src/components/common/Carousel.js
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ children, autoPlay = true, interval = 5000 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = React.Children.count(children);

    useEffect(() => {
        let timer;
        if (autoPlay) {
            timer = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % totalSlides);
            }, interval);
        }
        return () => clearInterval(timer);
    }, [autoPlay, interval, totalSlides]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="carousel-container position-relative" >
            <div className="carousel-track" style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                display: 'flex',
                transition: 'transform 0.5s ease-in-out',
            }}>
                {React.Children.map(children, (child) => (
                    <div className="carousel-slide" style={{ flex: '0 0 100%' }}>
                        {child}
                    </div>
                ))}
            </div>
            <button
                className="carousel-nav carousel-prev"
                onClick={prevSlide}
                style={{ position: 'absolute', left: 10, top: '50%' }}
            >
                <i className="fas fa-chevron-left"></i>
            </button>
            <button
                className="carousel-nav carousel-next"
                onClick={nextSlide}
                style={{ position: 'absolute', right: 10, top: '50%' }}
            >
                <i className="fas fa-chevron-right"></i>
            </button>
        </div>
    );
};

Carousel.propTypes = {
    children: PropTypes.node.isRequired,
    autoPlay: PropTypes.bool,
    interval: PropTypes.number
};

export default Carousel;