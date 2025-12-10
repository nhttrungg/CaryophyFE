import React from 'react';
import WishlistProduct from './WishlistProduct';

const WishlistProductList = ({wishlistItems, onRemove}) => {

    return (
        <div>
            {wishlistItems.map((product, idx) => (
                <WishlistProduct key={idx} wishlistItem={product} onRemove={onRemove}/>
            ))}
        </div>
    )
}

export default WishlistProductList;