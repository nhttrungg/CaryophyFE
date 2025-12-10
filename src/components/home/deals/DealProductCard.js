import React from 'react';

const DealProductCard = ({ product }) => (
    <div className="col-lg-6 col-md-6 u-s-m-b-30">
        <div className="product-o product-o--radius product-o--hover-off u-h-100">
            <div className="product-o__wrap">
                <a className="aspect aspect--bg-grey aspect--square u-d-block"
                   href={product.href}
                   style={{
                       backgroundImage: `url('${product.image}')`,
                       backgroundSize: 'cover',
                       backgroundPosition: 'center center'
                   }}
                >
                </a>
                <div className="product-o__special-count-wrap">
                    <div className="countdown countdown--style-special" data-countdown={product.countdown}></div>
                </div>
                <div className="product-o__action-wrap">
                    <ul className="product-o__action-list">
                        <li>
                            <a data-modal="modal" data-modal-id="#quick-look" data-tooltip="tooltip" data-placement="top" title="Quick View">
                                <i className="fas fa-search-plus"></i>
                            </a>
                        </li>
                        <li>
                            <a data-modal="modal" data-modal-id="#add-to-cart" data-tooltip="tooltip" data-placement="top" title="Add to Cart">
                                <i className="fas fa-plus-circle"></i>
                            </a>
                        </li>
                        <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Add to Wishlist">
                                <i className="fas fa-heart"></i>
                            </a>
                        </li>
                        <li>
                            <a href="signin.html" data-tooltip="tooltip" data-placement="top" title="Email me When the price drops">
                                <i className="fas fa-envelope"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <span className="product-o__category">
        <a href="shop-side-version-2.html">Electronics</a>
      </span>
            <span className="product-o__name">
        <a href={product.href}>{product.name}</a>
      </span>
            <div className="product-o__rating gl-rating-style">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <span className="product-o__review">(2)</span>
            </div>
            <span className="product-o__price">
        {product.price}
                <span className="product-o__discount">{product.discount}</span>
      </span>
        </div>
    </div>
);

export default DealProductCard;