import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const SlideItem = ({ imageUrl, titleClass }) => {
    return (
        <Link
            to="/shop"
            className={`hero-slide hero-slide--${titleClass === 'u-c-white' ? '2' : '1'}`}
            style={{
                display: 'block',
                height: '400px',
                backgroundImage: `url(${imageUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                textDecoration: 'none'
            }}
        >
        </Link>
    );
};

SlideItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
};

export default SlideItem;
