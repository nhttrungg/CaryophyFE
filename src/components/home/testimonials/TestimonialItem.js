// src/components/home/testimonials/TestimonialItem.js
import React from 'react';
import PropTypes from 'prop-types';

const TestimonialItem = ({ image, quote, author }) => (
    <div className="testimonial">
        <div className="testimonial__img-wrap" style={{backgroundImage: `url('${image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center'}}>
        </div>
        <div className="testimonial__content-wrap">
            <span className="testimonial__double-quote">
                <i className="fas fa-quote-right"></i>
            </span>
            <blockquote className="testimonial__block-quote">
                <p>"{quote}"</p>
            </blockquote>
            <span className="testimonial__author">{author}</span>
        </div>
    </div>
);

TestimonialItem.propTypes = {
    image: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
};

export default TestimonialItem;