import React from 'react';
import {wishlistApi} from "../../js/apiService";

const WishlistActions = () => {
    const clearWishlist = async () => {
        await wishlistApi.clearWishlist();
    };

    return(<div className="route-box">
        <div className="route-box__g">
            <a className="route-box__link" href="/shop">
                <i className="fas fa-long-arrow-alt-left"></i>
                <span>CONTINUE SHOPPING</span>
            </a>
        </div>
        <div className="route-box__g">
            <a className="route-box__link" href="/wishlist" onClick={()=> clearWishlist()}>
                <i className="fas fa-trash"></i>
                <span>CLEAR WISHLIST</span>
            </a>
        </div>
    </div>
    )
}


export default WishlistActions;