import React, {useEffect, useState} from 'react';
import {categoryApi, productApi} from "../../../js/apiService";
import {useNavigate} from "react-router-dom";

// Section title component
const SectionTitle = ({ heading, subheading }) => (
    <div className="section__intro u-s-m-b-16">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section__text-wrap">
                        <h1 className="section__heading u-c-secondary u-s-m-b-12">{heading}</h1>
                        <span className="section__span u-c-silver">{subheading}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// Category filter buttons
const CategoryFilter = ({ categories = [], selectedCategoryId, onSelect }) => {
    return (
        <div className="filter-category-container">
            {categories.length === 0 ? (
                <p>No categories available.</p>
            ) : (
                categories.map(cat => (
                    <div className="filter__category-wrapper" key={cat.categoryId}>
                        <button
                            className={`btn filter__btn filter__btn--style-1${selectedCategoryId === cat.categoryId ? ' js-checked' : ''}`}
                            type="button"
                            onClick={() => onSelect(cat.categoryId)}
                        >
                            {cat.name}
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};



// Product card
const ProductCard = ({ product , handleAddToCart, addToWishlist}) => {
    console.log("Rendering product:", product);

    return(
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30 filter__item">
            <div className="product-o product-o--hover-on product-o--radius">
                <div className="product-o__wrap">
                    <a
                        className="aspect aspect--bg-grey aspect--square u-d-block"
                        href={`/product/${product.productId}`}
                        style={{
                            backgroundImage: `url('${product.imageUrl || "/images/default.jpg"}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center center'
                        }}
                    />
                    <div className="product-o__action-wrap">
                        <ul className="product-o__action-list">
                            <li>
                                <a data-modal="modal" data-modal-id="#quick-look" title="Quick View">
                                    <i className="fas fa-search-plus"></i>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => handleAddToCart(product)} title="Add to Cart">
                                    <i className="fas fa-plus-circle"></i>
                                </a>
                            </li>
                            <li>
                                <a onClick={() => addToWishlist(product)} title="Add to Wishlist">
                                    <i className="fas fa-heart"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <span className="product-o__category">
                <a href="shop-side-version-2.html">{product.categoryName || "Uncategorized"}</a>
            </span>

                <span className="product-o__name">
                <a href={`/product/${product.productId}`}>{product.name || "No name"}</a>
            </span>

                <div className="product-o__rating gl-rating-style">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star-half-alt"></i>
                    <span className="product-o__review">
                    ({product.reviews?.length ?? 0})
                </span>
                </div>

                <span className="product-o__price">
                ${product.price}
                    {product.discount && (
                        <span className="product-o__discount">
                        {product.discount}
                    </span>
                    )}
            </span>
            </div>
        </div>
    );
}

// Product grid
const ProductGrid = ({ products = [] ,handleAddToCart, addToWishlist}) => {
    console.log("ProductGrid received:", products);
    return (
        <div className="filter__grid-wrapper u-s-m-t-30">
            <div className="row">
                {products.map(product => (
                    <ProductCard
                        product={product}
                        key={product.productId}
                        handleAddToCart={handleAddToCart}
                        addToWishlist={addToWishlist}
                    />
                ))}
            </div>
        </div>
    );
};

// Main section component
const TrendingSection = ({handleAddToCart, addToWishlist}) => {
    const[categories, setCategories] = useState([]);
    const[selectedCategoryId, setSelectedCategoryId] = useState(null)
    const[products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await categoryApi.getAll();
                console.log("Categories fetched:", res);
                setCategories(res);
                if (res.length > 0 )
                    setSelectedCategoryId(res[0].categoryId);
            }catch (error) {
                console.error("Error fetching categories:", error);
            }
        }
        fetchCategories();
    }, []);

    const fetchProductsByCategory = async () => {
        if (!selectedCategoryId) return;
        try {
            const res = await productApi.getByCategoryId(selectedCategoryId);
            console.log("Fetched products:", res);
            if (Array.isArray(res)) {
                setProducts(res);
            } else {
                console.warn("Unexpected response format", res);
            }

        } catch (err) {
            console.error("Failed to fetch products:", err);
        }
    };
    useEffect(() => {
        fetchProductsByCategory();
    }, [selectedCategoryId]);

    return (
        <div className="u-s-p-b-60">
            <SectionTitle heading="TOP TRENDING" subheading="CHOOSE CATEGORY" />
            <div className="section__content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <CategoryFilter
                                categories={categories}
                                selectedCategoryId={selectedCategoryId}
                                onSelect={setSelectedCategoryId}
                            />
                            <ProductGrid
                                products={products}
                                handleAddToCart={handleAddToCart}
                                addToWishlist={addToWishlist}
                            />
                        </div>
                        <div className="col-lg-12">
                            <div className="load-more">
                                <button className="btn btn--e-brand" type="button" onClick={()=> navigate('/shop')}>
                                    Load More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingSection;