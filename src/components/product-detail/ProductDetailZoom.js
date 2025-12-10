import React, { useState } from "react";

const ProductGallery = ({ product }) => {
    const images = product.images && product.images.length > 0
        ? product.images
        : product.imageUrl
            ? [product.imageUrl]
            : [];

    const [selected, setSelected] = useState(0);

    if (images.length === 0) return <div>No image</div>;

    console.log(images[selected])

    return (
        <div className="pd u-s-m-b-30">
            <div>
                <div >
                        <img
                            className="u-img-fluid"
                            src={images[selected]}
                            alt={product.name || "Product image"}
                        />
                </div>
            </div>
        </div>
    );
};

export default ProductGallery;
