// src/components/home/testimonials/TestimonialSlider.js
import React from 'react';
import PropTypes from 'prop-types';
import Carousel from '../../common/Carousel';
import TestimonialItem from './TestimonialItem';

const TestimonialSlider = ({ testimonials }) => (
    <div className="section__content">
        <div className="container">
            <div className="slider-fouc">
                <Carousel autoPlay={true} interval={5000}>
                    {testimonials.map(testimonial => (
                        <TestimonialItem
                            key={testimonial.id}
                            image={testimonial.image}
                            quote={testimonial.quote}
                            author={testimonial.author}
                        />
                    ))}
                </Carousel>
            </div>
        </div>
    </div>
);

TestimonialSlider.propTypes = {
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            image: PropTypes.string.isRequired,
            quote: PropTypes.string.isRequired,
            author: PropTypes.string.isRequired
        })
    ).isRequired
};

export default TestimonialSlider;