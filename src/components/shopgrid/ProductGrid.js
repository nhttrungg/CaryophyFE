import React, {useState} from 'react';
import AddToCartModal from "../common/AddToCartModal";
import ProductCard from "../../pages/shopgrid/ProductCard";
import Pagination from "../base/Pagenation";
import {cartApi, wishlistApi} from "../../js/apiService";

const ProductGrid = ({products, setPage,setSize,page,size,totalItem}) => {
    const [isGrid, setIsGrid] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddToCart = (product) => {
    cartApi.addToCart(product.productId,1)
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  const handleAddToWishlist = (product) => {
      console.log(product)
      wishlistApi.addToWishlist(product.productId)
  }
  return (
    <div className="shop-p">
      {/* Toolbar */}
      <div className="shop-p__toolbar u-s-m-b-30">
        <div className="shop-p__meta-wrap u-s-m-b-60">
          <span className="shop-p__meta-text-1">FOUND {totalItem} RESULTS</span>
          <div className="shop-p__meta-text-2">
            <span>Related Searches:</span>
          </div>
        </div>
        <div className="shop-p__tool-style">
          <div className="tool-style__group u-s-m-b-8"> <span
              className={`js-shop-grid-target ${isGrid ? "is-active" : ""}`}
              onClick={() => setIsGrid(true)}
          >
                    Grid
                </span>
            <span
                className={`js-shop-list-target ${!isGrid ? "is-active" : ""}`}
                onClick={() => setIsGrid(false)}
            >
                    List
                </span>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="shop-p__collection">
        <div className={`row ${isGrid ? "is-grid-active" : "is-list-active"}`}>
          {products.map(product =>
              <ProductCard key={product.productId} product={product} setIsModalOpen={setIsModalOpen}  handleAddToCart={(product)=> handleAddToCart(product)} handleAddToWishList={(product) => handleAddToWishlist(product)}/>
          )}
        </div>
      </div>

      {/* Pagination */}
      <div className="u-s-p-y-60">
        <Pagination
            page={page}
            size={size}
            total={totalItem}
            onPageChange={setPage}
        />
      </div>
      <AddToCartModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={selectedProduct}
      />
    </div>

  );
};

export default ProductGrid;