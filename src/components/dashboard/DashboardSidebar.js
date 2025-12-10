import React from 'react';

const DashboardSidebar = () => (
    <div className="dash__box dash__box--bg-white dash__box--shadow u-s-m-b-30">
        <div className="dash__pad-1">
            <span className="dash__text u-s-m-b-16">Hello, John Doe</span>
            <ul className="dash__f-list">
                <li>
                    <a className="dash-active" href="dashboard">Manage My Account</a>
                </li>
                <li>
                    <a href="profile">My Profile</a>
                </li>
                <li>
                    <a href="address-book">Address Book</a>
                </li>
                <li>
                    <a href="track-order">Track Order</a>
                </li>
                <li>
                    <a href="my-order">My Orders</a>
                </li>
                <li>
                    <a href="payment-option">My Payment Options</a>
                </li>
                <li>
                    <a href="cancellation">My Returns & Cancellations</a>
                </li>
            </ul>
        </div>
    </div>
);

export default DashboardSidebar;