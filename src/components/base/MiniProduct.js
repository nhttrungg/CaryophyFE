// src/components/base/MiniProduct.js
const MiniProduct = ({ imageUrl, category, name, quantity, price }) => {
    return (
        <div className="card-mini-product">
            <div className="mini-product">
                <div className="mini-product__image-wrapper">
                    <a className="mini-product__link" href="product-detail.html">
                        <img className="u-img-fluid" src={imageUrl} alt=""/>
                    </a>
                </div>
                <div className="mini-product__info-wrapper">
                    <span className="mini-product__category">
                        <a href="shop-side-version-2.html">{category}</a>
                    </span>
                    <span className="mini-product__name">
                        <a href="product-detail.html">{name}</a>
                    </span>
                    <span className="mini-product__quantity">{quantity} x</span>
                    <span className="mini-product__price">${price}</span>
                </div>
            </div>
            <a className="mini-product__delete-link far fa-trash-alt"></a>
        </div>
    );
}
export default MiniProduct;