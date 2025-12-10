import React, {useMemo, useState} from "react";
import {Formik, FormikProvider, useFormik} from "formik";
import AddressForm from "../base/CartAddressSection";
import {orderApi} from "../../js/apiService";
import {toast} from "react-toastify";


const CartSummarySection = ({ products }) => {

    const [shipFee, setShipFee] = useState(0);
    const subtotal = useMemo(() => {
        if (!products || products.length === 0) return 0;
        return products.reduce((sum, p) => sum + (p.price * p.quantity), 0);
    }, [products]);
    const grandTotal = subtotal + shipFee;

    const createOrder = async (order) => {
         try {
             const resp = await orderApi.createWithProducts(order);
             if(resp){
                 window.location.href = `/checkout/${resp.orderId}`
                 toast.info("ORDER CREATE COMPLETE")
             }
         }catch (error){
             toast.error("ORDER CREATE ERROR")
         }
    }

    const formik = useFormik({
        initialValues: {
            address: "",
            note: "",
            products: [],
            ShipCost: "",
            GrandTotal: ""
        },
        onSubmit: async (values) => {
            const submitData = {
                ...values,
                products,
                GrandTotal: grandTotal
            };
            await createOrder(submitData);

        }
    });


    const { values, setFieldValue, handleChange, handleSubmit } = formik

    const handleCalculateShippingFee = (value)=>{
        const randomShipCost = (Math.random() * (5 - 1) + 1).toFixed(2);
        setFieldValue("ShipCost", parseFloat(randomShipCost));
        setShipFee(parseFloat(randomShipCost))
        setFieldValue("address",value.province+","+value.district+","+value.ward+","+value.detail)
    }


    return (
        <div className="section__content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 u-s-m-b-30">
                        <FormikProvider value={formik}
                        >
                                <form className="f-cart" onSubmit={handleSubmit} >
                                    <div className="row">
                                        {/* Estimate shipping */}
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="f-cart__pad-box">
                                                <AddressForm
                                                    handleCalculateShippingFee={handleCalculateShippingFee}
                                                />
                                            </div>
                                        </div>
                                        {/* Note */}
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="f-cart__pad-box">
                                                <h1 className="gl-h1">NOTE</h1>
                                                <span className="gl-text u-s-m-b-30">Add Special Note About Your Product</span>
                                                <div>
                                                    <label htmlFor="f-cart-note"></label>
                                                    <textarea
                                                        className="text-area text-area--primary-style"
                                                        id="f-cart-note"
                                                        name="note"
                                                        value={values.note}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Summary */}
                                        <div className="col-lg-4 col-md-6 u-s-m-b-30">
                                            <div className="f-cart__pad-box">
                                                <div className="u-s-m-b-30">
                                                    <table className="f-cart__table">
                                                        <tbody>
                                                        <tr>
                                                            <td>SHIPPING</td>
                                                            <td>${shipFee.toFixed(2)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>SUBTOTAL</td>
                                                            <td>${subtotal.toFixed(2)}</td>
                                                        </tr>
                                                        <tr>
                                                            <td>GRAND TOTAL</td>
                                                            <td>${grandTotal.toFixed(2)}</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div>
                                                    <button className="btn btn--e-brand-b-2"
                                                    > PROCEED TO CHECKOUT</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                        </FormikProvider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSummarySection;
