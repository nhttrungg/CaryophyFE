import React from 'react';

const BreadcrumbSection = () => (
    <div className="u-s-p-y-60">
        <div className="section__content">
            <div className="container">
                <div className="breadcrumb">
                    <div className="breadcrumb__wrap">
                        <ul className="breadcrumb__list">
                            <li className="has-separator">
                                <a href="index.html">Home</a>
                            </li>
                            <li className="is-marked">
                                <a href="dash-edit-profile.html">My Account</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default BreadcrumbSection;