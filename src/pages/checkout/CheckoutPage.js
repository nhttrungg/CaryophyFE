import React, {useEffect, useState} from "react";
import CheckoutBreadcrumb from "../../components/checkout/CheckoutBreadcrumb";
import CheckoutMessageGroup from "../../components/checkout/CheckoutMessageGroup";
import DeliveryInformationForm from "../../components/checkout/DeliveryInformationForm";
import OrderSummary from "../../components/checkout/OrderSummary";
import {useParams} from "react-router-dom";
import {orderApi} from "../../js/apiService";
import '../../css/checkout.css'

const CheckoutPage = () => {

  const {orderId} = useParams();

  const [order,setOrders] = useState({
    "user": {},
    "orderDetails": [],
    "payments": []
  });

  useEffect(() => {
    const handleOrderDetail = async () => {
      const orderMock = await orderApi.getById(orderId);
      setTimeout(() => {
        setOrders(orderMock);
      }, 300); // mô phỏng delay network
    }
    handleOrderDetail()
  }, []);



  return(
      <div className="app-content">
        <CheckoutBreadcrumb />
        <CheckoutMessageGroup />
        <div className="u-s-p-b-60">
          <div className="section__content">
            <div className="container">
              <div className="checkout-f">
                <div className="row">
                  <div className="col-lg-6">
                    <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>
                    <DeliveryInformationForm order={order}/>
                  </div>
                  <div className="col-lg-6">
                    <h1 className="checkout-f__h1">ORDER SUMMARY</h1>
                    <OrderSummary order={order}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
};

export default CheckoutPage;