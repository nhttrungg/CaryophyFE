import React from "react";

const ProductDescriptionTab = ({description}) => (
    <div className="tab-pane fade show active" id="pd-desc">
        <div className="pd-tab__desc">
            <div className="u-s-m-b-15">
                <h4>PRODUCT INFORMATION</h4>
            </div>
            <div className="u-s-m-b-15">
                <p>{description}</p>
            </div>
        </div>
    </div>
);

export default ProductDescriptionTab;