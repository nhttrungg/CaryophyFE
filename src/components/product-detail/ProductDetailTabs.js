import React, { useState,useEffect } from "react";
import ProductDescriptionTab from "./ProductDescriptionTab";
import ProductTagsTab from "./ProductTagsTab";
import ProductReviewsTab from "./ProductReviewsTab";
import {productApi, reviewApi} from "../../js/apiService";
import '../../css/ProductDetailTabs.css';

const ProductDetailTabs = ({productId}) => {
  const [activeTab, setActiveTab] = useState("desc");
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const reviews = await reviewApi.getByProduct(productId)
      setReviews(reviews);
    }catch (error){
        console.error("Failed to fetch reviews:", error);
    }
  }

  const [description, setDescription] = useState("");
  const fetchDescription = async () => {
    try{
      const product = await productApi.getById(productId);
      console.log("Fetched product:", product);
      setDescription(product.longDescription);
    }catch (error){
      console.error("Failed to fetch product description:", error);
    }
  }
  useEffect(() => {
    fetchReviews();
    fetchDescription();
  }, []);

  const [showModal, setShowModal] = useState(false);
  const handleAddReview = async (form) => {
    try {
      const newReview = {
        productId: productId,
        rating: parseFloat(form.rating),
        comment: form.comment
      };
      console.log("Adding review:", newReview);
      const response = await reviewApi.create(newReview);
      setReviews((prev) => [...prev, response])
      setShowModal(false);
    }catch (error) {
      console.error(error);
    }
  }

  return (
      <div className="u-s-p-y-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="pd-tab">
                <div className="u-s-m-b-30">
                  <ul className="nav pd-tab__list">
                    <li className="nav-item">
                      <button
                          className={`nav-link${activeTab === "desc" ? " active" : ""}`}
                          onClick={() => setActiveTab("desc")}
                      >
                        DESCRIPTION
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                          className={`nav-link${activeTab === "rev" ? " active" : ""}`}
                          onClick={() => setActiveTab("rev")}
                          id="view-review"
                      >
                        REVIEWS <span>({reviews.length})</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="tab-content">
                  {activeTab === "desc" && <ProductDescriptionTab
                      description={description}
                  />}
                  {activeTab === "rev" &&<ProductReviewsTab
                      reviews={reviews}
                      onSubmit={handleAddReview}
                      onClose={() => setShowModal(false)}
                  />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProductDetailTabs;