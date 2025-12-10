import React from "react";

const DashboardSidebar = () => (
    <div className="col-lg-3 col-md-12">
        <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
            <div className="dash__pad-1">
                <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
                <ul className="dash__f-list">
                    <li><a href="dashboard.html">Manage My Account</a></li>
                    <li><a href="dash-my-profile.html">My Profile</a></li>
                    <li><a className="dash-active" href="dash-address-book.html">Address Book</a></li>
                    <li><a href="dash-track-order.html">Track Order</a></li>
                    <li><a href="dash-my-order.html">My Orders</a></li>
                    <li><a href="dash-payment-option.html">My Payment Options</a></li>
                    <li><a href="dash-cancellation.html">My Returns & Cancellations</a></li>
                </ul>
            </div>
        </div>
    </div>
);

export default DashboardSidebar;