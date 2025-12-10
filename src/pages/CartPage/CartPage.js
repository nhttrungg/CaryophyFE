import React, {useEffect, useState} from "react";
import CartBreadcrumb from "../../components/cart/CartBreadcrumb";
import CartTable from "../../components/cart/CartTable";
import CartRouteBox from "../../components/cart/CartRouteBox";
import CartSummarySection from "../../components/cart/CartSummarySection";
import {getUser} from "../../utils/AuthUtils";
import {cartApi, productApi} from "../../js/apiService";
import {toast} from "react-toastify";

const CartPage = () => {
    const [cartItems,setCartItems] = useState([])

    const fetchCartItems = async () => {
        try {
            if(getUser()){
                const res = await cartApi.getCart()
                console.log(res)
                setCartItems(res.map(r=> {
                    let product = r.product;
                    product.cartItemId = r.cartItemId
                    product.stock = product.quantity;
                    product.quantity = r.quantity;
                    return product;
                }))
            }
        }catch (error){
            console.log(error)
        }
    }

    const onQuantityChange = (productId,quantity) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.productId === productId
                    ? {
                        ...item,
                        quantity: Math.max(
                            1,
                            Math.min(item.quantity + quantity, item.stock)
                        ),
                    }
                    : item
            )
        );
    }

    const onRemove = async (productId) => {
        const cartItem = cartItems.filter(item => item.productId === productId)
        setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
        try {
            const id = cartItem[0]?.cartItemId
            await cartApi.deleteItem(id);
            await cartApi.clearCart();
        }catch (error){
            toast.error(error)
        }
    }


    useEffect(() => {
        fetchCartItems()
    }, []);

    return (
        <div className="app-content">
            <div className="u-s-p-y-60">
                <CartBreadcrumb />
            </div>

            <div className="u-s-p-b-60">
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">SHOPPING CART</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                                <CartTable
                                    cartItems={cartItems}
                                    onQuantityChange={onQuantityChange}
                                    onRemove={onRemove}
                                />
                            </div>
                            <div className="col-lg-12">
                                <CartRouteBox />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="u-s-p-b-60">
                <CartSummarySection products={cartItems} />
            </div>
        </div>
    )
};

export default CartPage;
