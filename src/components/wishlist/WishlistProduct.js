import React from 'react';
import {cartApi} from "../../js/apiService";

const WishlistProduct = ({ wishlistItem, onRemove }) => (
    <div className="w-r u-s-m-b-30">
        <div className="w-r__container">
            <div className="w-r__wrap-1">
                <div className="w-r__img-wrap">
                    <img className="u-img-fluid" src={wishlistItem.imageUrl} alt={wishlistItem.name} />
                </div>
                <div className="w-r__info">
          <span className="w-r__name">
            <a href={`/product-detail/${wishlistItem.productId}`}>{wishlistItem.name}</a>
          </span>
                    <span className="w-r__category">
            <a href={`/category/${wishlistItem.categoryId}`}>{wishlistItem.category?.name}</a>
          </span>
                    <span className="w-r__price">
            ${wishlistItem.price}
          </span>
                </div>
            </div>
            <div className="w-r__wrap-2">
                <a className="w-r__link btn--e-brand-b-2" data-modal="modal" data-modal-id="#add-to-cart" onClick={() => {
                    console.log(wishlistItem)
                    cartApi.addToCart(wishlistItem.productId,1)
                }}>ADD TO CART</a>
                <a className="w-r__link btn--e-transparent-platinum-b-2" href={`/product-detail/${wishlistItem.productId}`}>VIEW</a>
                <a className="w-r__link btn--e-transparent-platinum-b-2" href="#"
                   onClick={(e) => {e.preventDefault(); onRemove(wishlistItem.wishlistItemId); }}>REMOVE</a>
            </div>
        </div>
    </div>
);

export default WishlistProduct;