import React from "react";
import CartItemRow from "./CartItem";

const CartTable = ({cartItems,onQuantityChange,onRemove}) => {

    return(
        <div className="table-responsive">
            <table className="table-p">
                <tbody>
                {
                    cartItems.length > 0 && cartItems.map(item => (
                            <CartItemRow
                                key={item.cartItemId}
                                cartItem={item}
                                onQuantityChange={onQuantityChange}
                                onRemove={onRemove}
                            />
                        ))
                }
                </tbody>
            </table>
        </div>
    )
};

export default CartTable;
