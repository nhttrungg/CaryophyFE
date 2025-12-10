// src/components/home/testimonials/TestimonialSection.js
import React from 'react';
import SectionTitle from './SectionTitle';
import TestimonialSlider from './TestimonialSlider';

const TestimonialSection = () => {
    const testimonials = [
        {
            id: 1,
            image: 'images/about/test-1.jpg',
            quote: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
            author: 'John D. / DVNTR Inc.'
        },
        // Add other testimonials...
    ];

    return (
        <div className="u-s-p-b-90 u-s-m-b-30">
            <SectionTitle
                heading="CLIENTS FEEDBACK"
                subheading="WHAT OUR CLIENTS SAY"
            />
            <TestimonialSlider testimonials={testimonials} />
        </div>
    );
};

export default TestimonialSection;