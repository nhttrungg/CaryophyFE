import React,{useState, useRef} from "react";
import '../../css/ProductReviewsTab.css';

const ProductReviewsTab = ({onClose, onSubmit, reviews}) => {
    const [form, setForm] = useState({
        rating: "",
        comment: "",
    })
    const fileRef = useRef(null);

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(f =>({...f, [name]: value}))
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Submitting review:", form);
        onSubmit(form)
        setForm({ rating: "", comment: ""});
        onClose()
    }

    return(
        <div className="pd-tab__rev">
            <div className="u-s-m-b-30">
                <div className="pd-tab__rev-score">
                    <div className="u-s-m-b-8">
                        <h2>{reviews.length} Reviews</h2>
                    </div>
                    <div className="gl-rating-style-2 u-s-m-b-8">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                    <div className="u-s-m-b-8">
                        <h4>We want to hear from you!</h4>
                    </div>
                    <span className="gl-text">
            Tell us what you think about this item
          </span>
                </div>
            </div>

            {/* Reviews List */}
            <div className="u-s-m-b-30">
                <form className="pd-tab__rev-f1">
                    <div className="rev-f1__group">
                        <div className="u-s-m-b-15">
                            <h2>{reviews.length} Review(s)</h2>
                        </div>
                    </div>
                    <div className="rev-f1__review">
                        <div className="review-list">
                            {reviews.map((r, i) => (
                                <div className="review-item" key={i}>
                                    <div className="review-avatar"></div>
                                    <div className="review-content">
                                        <div className="review-header">
                                            <span className="review-name">{r.name || "Anonymous"}</span>
                                            <span className="review-date">{new Date(r.createdAt || Date.now()).toLocaleDateString()}</span>
                                        </div>
                                        <div className="review-stars">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <i
                                                    key={star}
                                                    className={`fa-star ${star <= r.rating ? 'fas' : 'far'}`}
                                                    style={{ color: '#ffc107', marginRight: '2px' }}
                                                ></i>
                                            ))}
                                            <span style={{ marginLeft: "6px", fontSize: "13px", color: "#666" }}>
                                            ({r.rating})
                                          </span>
                                        </div>
                                        <div className="review-text">{r.comment}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </form>
            </div>

            {/* Add Review Form */}
            <div className="u-s-m-b-30">
                <form className="comment-box" onSubmit={handleSubmit}>
                    <div
                        className="comment-box__avatar"
                    ></div>
                    <div className="comment-box__form">
                        <textarea
                            className="comment-box__textarea"
                            name="comment"
                            rows="3"
                            placeholder="Write a review..."
                            value={form.comment}
                            onChange={handleChange}
                            required
                        />
                        <div className="comment-box__rating">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <i
                                    key={star}
                                    className={`fa-star ${form.rating >= star ? 'fas' : 'far'}`}
                                    onClick={() => setForm((f) => ({ ...f, rating: star }))}
                                    style={{ fontSize: '20px', color: '#ffcc00', cursor: 'pointer', marginRight: '5px' }}
                                ></i>
                            ))}
                        </div>
                        <button className="comment-box__submit" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductReviewsTab;