import React from "react";
import OrderItem from "./OrderItem";

const orders = [
  {
    id: "305423126",
    date: "26 Oct 2016 09:08:37",
    img: "images/product/electronic/product3.jpg",
    title: "Yellow Wireless Headphone",
    status: "Processing",
    statusClass: "processing",
    quantity: 1,
    total: "$16.00"
  },
  {
    id: "305423126",
    date: "26 Oct 2016 09:08:37",
    img: "images/product/women/product8.jpg",
    title: "New Dress D Nice Elegant",
    status: "Shipped",
    statusClass: "shipped",
    quantity: 1,
    total: "$16.00"
  },
  {
    id: "305423126",
    date: "26 Oct 2016 09:08:37",
    img: "images/product/men/product8.jpg",
    title: "New Fashion D Nice Elegant",
    status: "Delivered",
    statusClass: "delivered",
    quantity: 1,
    total: "$16.00"
  }
];

const OrderList = () => (
  <div className="m-order__list">
    {orders.map((order, idx) => (
      <OrderItem order={order} key={idx} />
    ))}
  </div>
);

export default OrderList;