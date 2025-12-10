import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductRightDetails from "../../components/product-detail/ProductRightDetails";
import ProductDetailTabs from "../../components/product-detail/ProductDetailTabs";
import CustomerAlsoViewed from "../../components/product-detail/CustomerAlsoViewed";
import {cartApi, productApi, reviewApi, wishlistApi} from "../../js/apiService";
import ProductGallery from "../../components/product-detail/ProductDetailZoom";

const ProductDetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity,setQuantity] = useState(1);
    const [customerAlsoViewed, setCustomerAlsoViewed] = useState([]);
    useEffect(() => {
        if (!id) return;

        const fetchProduct = async () => {
            setLoading(true);
            const res = await productApi.getById(id);
            setProduct(res)
            setLoading(false)
            const resp = await productApi.getCustomerAlsoViewed(id)
            setCustomerAlsoViewed(resp)
        }
        fetchProduct()
    }, [id]);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!product) return <div>Không tìm thấy sản phẩm</div>;

    const handleAddToCart = (product) => {
        cartApi.addToCart(product.productId,quantity)
    };

    const handleAddToWishlist = (product) => {
        wishlistApi.addToWishlist(product.productId)
    };

    return (
        <div className="app-content">
            <div className="u-s-p-t-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <ProductGallery product={product} />
                        </div>
                        <div className="col-lg-7">
                            <ProductRightDetails product={product}
                                                 setQuantity={setQuantity}
                                                 quantity={quantity}
                                                 handleAddToCart={handleAddToCart}
                                                 addToWishlist={handleAddToWishlist}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ProductDetailTabs productId={id} />
            <CustomerAlsoViewed
                customerAlsoViewed={customerAlsoViewed}
                addToCard={handleAddToCart}
                addToWishlist={handleAddToWishlist}
            />
        </div>
    );
};

export default ProductDetailPage;
