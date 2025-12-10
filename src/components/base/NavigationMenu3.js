// src/components/base/NavigationMenu3.js
import MiniProduct from "./MiniProduct";
import {useEffect, useState} from "react";
import {cartApi} from "../../js/apiService";
import {getUser} from "../../utils/AuthUtils";

const NavigationMenu3 = () => {
    const [cartItems,setCartItems] = useState([])

    const fetchCartItems = async () => {
       try {
           if(getUser()){
               const res = await cartApi.getCart()
               setCartItems(res.map(r=> {
                   let product = r.product;
                   product.quantity = r.quantity;
                   return product;
               }))
           }
       }catch (error){
           console.log(error)
       }
    }

    useEffect(() => {
        fetchCartItems()
    }, []);

    return (
        <div className="menu-init" id="navigation3">
            <button className="btn btn--icon toggle-button fas fa-shopping-bag toggle-button-shop" type="button"></button>
            <span className="total-item-round">2</span>
            <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                    <li>
                        <a href="/"><i className="fas fa-home"></i></a>
                    </li>
                    <li>
                        <a href="/wishlist"><i className="far fa-heart"></i></a>
                    </li>
                    <li className="has-dropdown">
                        <a className="mini-cart-shop-link">
                            <i className="fas fa-shopping-bag"></i>
                            <span className="total-item-round">{cartItems.length}</span>
                        </a>
                        <span className="js-menu-toggle"></span>
                        <div className="mini-cart">
                            <div className="mini-product-container gl-scroll u-s-m-b-15">
                                {cartItems.map((item, index) => (
                                    <MiniProduct key={index} {...item} />
                                ))}
                            </div>
                            <div className="mini-product-stat">
                                <div className="mini-total">
                                    <span className="subtotal-text">SUBTOTAL</span>
                                    <span
                                        className="subtotal-value">${cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)}</span>
                                </div>
                                <div className="mini-action">
                                <a className="mini-link btn--e-brand-b-2" href="checkout.html">
                                        PROCEED TO CHECKOUT
                                    </a>
                                    <a className="mini-link btn--e-transparent-secondary-b-2" href="/cart"
                                    >
                                        VIEW CART
                                    </a>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationMenu3;