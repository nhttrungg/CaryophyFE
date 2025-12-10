import React, { useEffect, useState } from "react";
import {orderApi} from "../../js/apiService";

const OrderCheckoutSummary = ({ order }) => {

  const { orderDetails, user, address, shipCost, totalAmount, grandTotal } = order;
  const paymentMethods = [
    {
      id: "cash-on-delivery",
      label: "Cash on Delivery",
      type: "CASH",
      description: "Pay upon delivery with cash."
    },
    {
      id: "direct-bank-transfer",
      label: "Direct Bank Transfer",
      type: "FUND",
      description: "Transfer directly to our bank account using your order ID."
    }
  ]

  const [showQR, setShowQR] = useState(false);
  const [paymentMethod,setPaymentMethod] = useState();

  const updatePaymentOrder = async () => {
    await orderApi.updatePayment(order.orderId, paymentMethod)
  }

  const qrUrl = `https://img.vietqr.io/image/MB-4730865860204-compact.png?amount=${order.grandTotal}&addInfo=Thanh+toan+don+hang+${order.code}`;

  return (
      <div className="o-summary">
        <div className="o-summary__section u-s-m-b-30">
          <div className="o-summary__item-wrap gl-scroll">
            {orderDetails.map((item, idx) => (
                <div className="o-card" key={idx}>
                  <div className="o-card__flex">
                    <div className="o-card__img-wrap">
                      <img className="u-img-fluid" src={item.product.imageUrl} alt={item.product.name} />
                    </div>
                    <div className="o-card__info-wrap">
                  <span className="o-card__name">
                    <a href={`/product-detail/${item.productId}`}>{item.product.name}</a>
                  </span>
                      <span className="o-card__quantity">Quantity x {item.quantity}</span>
                      <span className="o-card__price">${item.price.toLocaleString()}</span>
                    </div>
                  </div>
                  <a className="o-card__del far fa-trash-alt"></a>
                </div>
            ))}
          </div>
        </div>
        <div className="o-summary__section u-s-m-b-30">
          <div className="o-summary__box">
            <h1 className="checkout-f__h1">SHIPPING & BILLING</h1>
            <div className="ship-b">
              <span className="ship-b__text">Ship to:</span>
              <div className="ship-b__box u-s-m-b-10">
                <p className="ship-b__p">{address} {user?.phone || "(no phone)"}</p>
                <a className="ship-b__edit btn--e-transparent-platinum-b-2">Edit</a>
              </div>
              <div className="ship-b__box">
                <span className="ship-b__text">Bill to default billing address</span>
                <a className="ship-b__edit btn--e-transparent-platinum-b-2">Edit</a>
              </div>
            </div>
          </div>
        </div>
        <div className="o-summary__section u-s-m-b-30">
          <div className="o-summary__box">
            <table className="o-summary__table">
              <tbody>
              <tr>
                <td>SHIPPING</td>
                <td>${shipCost}</td>
              </tr>
              <tr>
                <td>SUBTOTAL</td>
                <td>${totalAmount && totalAmount.toLocaleString()}</td>
              </tr>
              <tr>
                <td>GRAND TOTAL</td>
                <td>${grandTotal && grandTotal.toLocaleString()}</td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="o-summary__section u-s-m-b-30">
          <div className="o-summary__box">
            <h1 className="checkout-f__h1">PAYMENT INFORMATION</h1>
            <div className="checkout-f__payment">
              {paymentMethods.map((method) => (
                  <div className="u-s-m-b-10" key={method.id}>
                    <div className="radio-box">
                      <input
                          type="radio"
                          id={method.id}
                          name="payment"
                          onChange={() => {
                            setShowQR(method.type === "FUND")
                            setPaymentMethod(method.type)
                          }}
                      />
                      <div className="radio-box__state radio-box__state--primary">
                        <label className="radio-box__label" htmlFor={method.id}>{method.label}</label>
                      </div>
                    </div>
                    <span className="gl-text u-s-m-t-6">{method.description}</span>
                  </div>
              ))}
              {showQR && (
                  <div className="modal-overlay">
                    <div className="modal-content">
                      <img src={qrUrl} alt="QR Code VietQR" />
                      <button className="btn btn--e-brand-b-2" onClick={() => setShowQR(false)}>Close</button>
                    </div>
                  </div>
              )}

              <div>
                <button className="btn btn--e-brand-b-2" type="submit" onClick={()=>updatePaymentOrder()}>PLACE ORDER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OrderCheckoutSummary;
