import React from "react";

const CartRouteBox = () => (
    <div className="route-box">
        <div className="route-box__g1">
            <a className="route-box__link" href='/shop'>
                <i className="fas fa-long-arrow-alt-left"></i>
                <span>CONTINUE SHOPPING</span>
            </a>
        </div>
        <div className="route-box__g2">
            <a className="route-box__link" href="cart.html">
                <i className="fas fa-trash"></i>
                <span>CLEAR CART</span>
            </a>
        </div>
    </div>
);

export default CartRouteBox;
