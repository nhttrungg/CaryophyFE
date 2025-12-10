import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DealItem = ({productId, imageSrc, isSquare, colSize, name, price }) => {
    const href = `/product-detail/${productId}`;
    return (
        <div className={`col-lg-${colSize} col-md-${colSize} u-s-m-b-30`}>
            <Link className="collection" to={href}>
                <div
                    className={`aspect aspect--bg-grey ${isSquare ? 'aspect--square' : 'aspect--1286-890'}`}
                    style={{
                        backgroundImage: `url('${imageSrc}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center'
                    }}
                >
                </div>
            </Link>

            {/* Thêm thông tin sản phẩm */}
            <div className="u-s-m-t-10">
                <Link to={href} className="deal__name"  style={{ fontWeight: '600', color: '#000', display: 'block' }}>
                    {name}
                </Link>
                <span className="deal__price" style={{ fontWeight: '700', color: '#ff4c3b', fontSize: '1rem' }}>
                    ${price.toLocaleString()}
                </span>
            </div>
        </div>
    );
};

DealItem.propTypes = {
    productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    imageSrc: PropTypes.string.isRequired,
    isSquare: PropTypes.bool.isRequired,
    colSize: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
};

export default DealItem;
