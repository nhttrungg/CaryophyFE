import React, {useEffect} from 'react';
import {useNavigate, useNavigation} from "react-router-dom";

const AddToCartModal = ({ isOpen, onClose, product }) => {

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <>
            {/* Overlay */}
            <div
                className="modal-overlay"
                onClick={onClose}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    zIndex: 1050
                }}
            />
            <div className="modal fade show"
                 id="add-to-cart"
                 style={{
                     paddingRight: '15px',
                     display: 'block',
                     position: 'fixed',
                     top: '50%',
                     left: '50%',
                     transform: 'translate(-50%, -50%)',
                     zIndex: 1051
                 }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content modal-radius modal-shadow">
                                <button
                                    className="btn dismiss-button fas fa-times"
                                    type="button"
                                    onClick={onClose}
                                />
                                <div className="modal-body">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-12">
                                            <div className="success u-s-m-b-30">
                                                <div className="success__text-wrap">
                                                    <i className="fas fa-check" />
                                                    <span>Item is added successfully!</span>
                                                </div>
                                                <div className="success__img-wrap">
                                                    <img
                                                        className="u-img-fluid"
                                                        src={product?.imageUrl || 'images/product/electronic/product1.jpg'}
                                                        alt={product?.name}
                                                    />
                                                </div>
                                                <div className="success__info-wrap">
                                                    <span className="success__name">{product?.name || 'Beats Bomb Wireless Headphone'}</span>
                                                    <span className="success__quantity">Quantity: {product?.quantity || 1}</span>
                                                    <span className="success__price">${product?.price || '170.00'}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-12">
                                            <div className="s-option">
                                                <span className="s-option__text">1 item (s) in your cart</span>
                                                <div className="s-option__link-box">
                                                    <button
                                                        className="s-option__link btn--e-white-brand-shadow"
                                                        onClick={onClose}
                                                    >
                                                        CONTINUE SHOPPING
                                                    </button>
                                                    <a className="s-option__link btn--e-white-brand-shadow"
                                                       href={'/cart'}>
                                                        VIEW CART
                                                    </a>
                                                    <a className="s-option__link btn--e-brand-shadow" href="checkout.html">
                                                        PROCEED TO CHECKOUT
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
};

export default AddToCartModal;