import React,{useState,useEffect} from "react";
import Carousel from "../common/Carousel";

const CustomerAlsoViewed = ({customerAlsoViewed, addToCard,addToWishlist}) =>{

    return(
        <div className="u-s-p-b-90">
            <div className="section__intro u-s-m-b-46">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section__text-wrap">
                                <h1 className="section__heading u-c-secondary u-s-m-b-12">CUSTOMER ALSO VIEWED</h1>
                                <span className="section__span u-c-grey">PRODUCTS THAT CUSTOMER VIEWED</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section__content">
                <div className="container">

                    <Carousel autoPlay={true} interval={5000}>
                        {customerAlsoViewed.map((c, idx) => {
                                return(
                                    <div className="col-lg-4 col-md-6 col-sm-12 u-s-m-b-30"> {/* to hơn */}
                                        <div className="product-o product-o--hover-on" style={{ maxWidth: "260px", margin: "0 auto" }}>
                                            <div className="product-o__wrap">
                                                <div >
                                                    <img
                                                        className="u-img-fluid"
                                                        src={c.imageUrl}
                                                        alt={c.name || "Product image"}
                                                    />
                                                </div>
                                                <div className="product-o__action-wrap">
                                                    <ul className="product-o__action-list">
                                                        <li>
                                                            <a title="Add to Cart" onClick={()=>{addToCard(c)}}>
                                                                <i className="fas fa-plus-circle"></i>
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a  title="Add to Wishlist" onClick={()=>{addToWishlist(c)}}>
                                                                <i className="fas fa-heart"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <span className="product-o__category">
                                            <a href="#">Sản phẩm</a>
                                        </span>

                                            <span className="product-o__name">
                                            <a href={`/product/${c.productId}`}>{c.name}</a>
                                        </span>

                                            <div className="product-o__rating gl-rating-style">
                                                {[...Array(5)].map((_, i) => (
                                                    <i className="fas fa-star" key={i}></i>
                                                ))}
                                                <span className="product-o__review">(0)</span>
                                            </div>

                                            <span className="product-o__price">
                                                {c.price.toLocaleString("vi-VN")}₫
                                            </span>
                                        </div>
                                    </div>
                                )
                            }
                        )}
                    </Carousel>


                </div>
            </div>
        </div>
    )
}

export default CustomerAlsoViewed;
