import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ heading, spans }) => (
    <div className="section__intro u-s-m-b-46">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__text-wrap">
                        <h1 className="section__heading u-c-secondary u-s-m-b-12">{heading}</h1>
                        {spans.map((text, idx) => (
                            <span className="section__span u-c-silver" key={idx}>{text}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

SectionTitle.propTypes = {
    heading: PropTypes.string.isRequired,
    spans: PropTypes.string.isRequired
};

export default SectionTitle;