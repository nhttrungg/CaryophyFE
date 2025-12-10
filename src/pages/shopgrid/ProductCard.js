

const ProductCard = ({ product, setIsModalOpen , handleAddToCart, handleAddToWishList}) => (
    <div className="col-lg-4 col-md-6 col-sm-6" >
        <div className="product-m">
            <div className="product-m__thumb">
                <a
                    className="aspect aspect--bg-grey aspect--square u-d-block"
                    href={`/product-detail/${product.productId}`}
                    style={{
                        backgroundImage: `url(${product.imageUrl || "images/product/men/product1.jpg"})`,
                        backgroundSize: "cover"
                    }}
                >
                </a>
                <div className="product-m__quick-look">
                    <a className="fas fa-search"
                       data-modal="modal"
                       data-modal-id="#quick-look"
                       data-tooltip="tooltip"
                       data-placement="top"
                       title="Quick Look"
                    ></a>
                </div>
                <div className="product-m__add-cart">
                    <a className="btn--e-brand" onClick={() => {
                        setIsModalOpen(true)
                        handleAddToCart(product)
                    }}>Add to Cart</a>
                </div>
            </div>
            <div className="product-m__content">
                <div className="product-m__category">
                    <a href="#">{product.categoryId ? `Category ${product.categoryId}` : "Other"}</a>
                </div>
                <div className="product-m__name">
                    <a href={`/product-detail/${product.productId}`}>{product.name}</a>
                </div>
                {/* Nếu muốn hiển thị đánh giá, bạn lấy dữ liệu từ reviews hoặc hardcode nếu chưa có */}
                <div className="product-m__rating gl-rating-style">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <span className="product-m__review">(0)</span>
                </div>
                <div className="product-m__price">${product.price}</div>
                <div className="product-m__hover">
                    <div className="product-m__preview-description">
                        <span>{product.description || "No description"}</span>
                    </div>
                    <div className="product-m__wishlist">
                        <a className="far fa-heart"
                           href="#"
                           data-tooltip="tooltip"
                           data-placement="top"
                           title="Add to Wishlist"
                           onClick={() => handleAddToWishList(product)}
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default ProductCard;
