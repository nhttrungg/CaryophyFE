import React from "react";

const ProductTagsTab = () => (
        <div className="pd-tab__tag">
            <h2 className="u-s-m-b-15">ADD YOUR TAGS</h2>
            <div className="u-s-m-b-15">
                <form>
                    <input className="input-text input-text--primary-style" type="text" />
                    <button className="btn btn--e-brand-b-2" type="submit">ADD TAGS</button>
                </form>
            </div>
            <span className="gl-text">Use spaces to separate tags. Use single quotes (') for phrases.</span>
        </div>
);

export default ProductTagsTab;