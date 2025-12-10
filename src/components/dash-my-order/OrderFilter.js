import React from "react";

const OrderFilter = () => (
  <form className="m-order u-s-m-b-30">
    <div className="m-order__select-wrapper">
      <label className="u-s-m-r-8" htmlFor="my-order-sort">Show:</label>
      <select className="select-box select-box--primary-style" id="my-order-sort">
        <option>Last 5 orders</option>
        <option>Last 15 days</option>
        <option>Last 30 days</option>
        <option>Last 6 months</option>
        <option>Orders placed in 2018</option>
        <option>All Orders</option>
      </select>
    </div>
  </form>
);

export default OrderFilter;