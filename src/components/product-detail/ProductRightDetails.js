import React, {useState} from "react";
import "../../css/ProductRightDetails.css";
import {cartApi} from "../../js/apiService";

const ProductRightDetails = ({ product,setQuantity,quantity ,handleAddToCart, addToWishlist}) => {
    if (!product) return null;

    const discountPercent = 76;
    const oldPrice = product.price ? (product.price / (1 - discountPercent / 100)).toFixed(2) : null;
    const averageRating =
        product.reviews && product.reviews.length
            ? (
                product.reviews.reduce((sum, r) => sum + (r.rating || 0), 0) /
                product.reviews.length
            ).toFixed(1)
            : "0";



    return (
        <div className="pd-detail detail-wrapper">
            {/* Tên + Giá + Discount */}
            <div className="detail-header">
                <h2 className="pd-detail__name">{product.name}</h2>
                <div className="price-block">
                    <span className="pd-detail__price">${product.price}</span>
                    {oldPrice && (
                        <>
                            <span className="pd-detail__discount">({discountPercent}% OFF)</span>
                            <del className="pd-detail__del">${oldPrice}</del>
                        </>
                    )}
                </div>
            </div>
            {/* Rating */}
            <div className="detail-rating">
                <div className="pd-detail__rating gl-rating-style">
                    {Array.from({ length: 5 }, (_, idx) => {
                        const starValue = idx + 1;
                        if (averageRating >= starValue) return <i key={idx} className="fas fa-star"></i>;
                        if (averageRating > idx && averageRating < starValue) return <i key={idx} className="fas fa-star-half-alt"></i>;
                        return <i key={idx} className="far fa-star"></i>;
                    })}
                    <span className="pd-detail__review u-s-m-l-4">
            <a href="#view-review">{product.reviews?.length || 0} Reviews</a>
          </span>
                </div>
            </div>
            {/* Stock */}
            <div className="detail-stock">
        <span className={`pd-detail__stock ${product.stock > 0 ? "stock-green" : "stock-red"}`}>
          {product.stock} in stock
        </span>
                {product.stock < 5 && <span className="pd-detail__left">Only {product.stock} left</span>}
            </div>
            {/* Description */}
            <div className="detail-desc">
                <span className="pd-detail__preview-desc">{product.description}</span>
            </div>
            {/* Wishlist + Price Drop */}
            <div className="detail-actions">
        <span className="pd-detail__click-wrap">
          <i className="far fa-heart u-s-m-r-6"></i>
          <a onClick={()=>addToWishlist(product)}>Add to Wishlist</a>
          <span className="pd-detail__click-count">({product.wishlistCount || 0})</span>
        </span>
                <span className="pd-detail__click-wrap" style={{ marginLeft: 16 }}>
          <i className="far fa-envelope u-s-m-r-6"></i>
          <a href="signin.html">Email me When the price drops</a>
          <span className="pd-detail__click-count">(20)</span>
        </span>
            </div>
            {/* Add to cart */}
            <div className="detail-cart">
                <form className="pd-detail__form">
                    <div className="pd-detail-inline-2">
                        <div className="input-counter">
                            <span className="input-counter__minus fas fa-minus"
                                  onClick={()=>{
                                      if(quantity > 0) setQuantity(quantity-1)
                                  }}
                            ></span>
                            <input
                                className="input-counter__text input-counter--text-primary-style"
                                type="text"
                                value={quantity}
                                data-min="1"
                                data-max={product.quantity}
                                readOnly
                            />
                            <span className="input-counter__plus fas fa-plus" onClick={()=>{
                                if(quantity < product.quantity) setQuantity(quantity+1)
                            }}></span>
                        </div>
                        <button className="btn btn--e-brand-b-2" type="submit" style={{ marginLeft: 16 }} onClick={()=>handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                </form>
            </div>
            {/* Policy */}
            <div className="detail-policy">
                <span className="pd-detail__label u-s-m-b-8">Product Policy:</span>
                <ul className="pd-detail__policy-list">
                    <li><i className="fas fa-check-circle u-s-m-r-8"></i><span>Buyer Protection.</span></li>
                    <li><i className="fas fa-check-circle u-s-m-r-8"></i><span>Full Refund if you don't receive your order.</span></li>
                    <li><i className="fas fa-check-circle u-s-m-r-8"></i><span>Returns accepted if product not as described.</span></li>
                </ul>
            </div>
        </div>
    );
};

export default ProductRightDetails;
