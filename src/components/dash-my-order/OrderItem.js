import React from "react";
import moment from "moment";

const OrderItem = ({ order }) => {
  const orderId = order.orderId;
  const date = moment(order.createdAt).format("DD/MM/YYYY");
  const status = order.orderStatus;
  const quantity = order.orderDetails?.reduce((sum, item) => sum + item.quantity, 0) || 0;
  const total = order.grandTotal.toLocaleString("vi-VN", { style: "currency", currency: "VND" });

  return (
      <div className="m-order__get">
        <div className="manage-o__header u-s-m-b-30">
          <div className="dash-l-r">
            <div>
              <div className="manage-o__text-2 u-c-secondary">Order #{orderId}</div>
              <div className="manage-o__text u-c-silver">Placed on {date}</div>
            </div>
            <div>
              <div className="dash__link dash__link--brand">
                <a href={`/orders/${orderId}`}>MANAGE</a>
              </div>
            </div>
          </div>
        </div>

        <div className="manage-o__description">
          <div className="description__container">
            <div className="description__img-wrap">
              <img
                  className="u-img-fluid"
                  src={order.orderDetails?.[0]?.product?.imageUrl || "/default-img.jpg"}
                  alt="product"
              />
            </div>
            <div className="description-title">
              {order.orderDetails?.[0]?.product?.name || "Product Name"}
            </div>
          </div>

          <div className="description__info-wrap">
            <div>
            <span className={`manage-o__badge badge--${status.toLowerCase()}`}>
              {status}
            </span>
            </div>
            <div>
            <span className="manage-o__text-2 u-c-silver">
              Quantity: <span className="u-c-secondary">{quantity}</span>
            </span>
            </div>
            <div>
            <span className="manage-o__text-2 u-c-silver">
              Total: <span className="u-c-secondary">{total}</span>
            </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OrderItem;
