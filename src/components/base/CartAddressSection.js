import React, { useState, useEffect } from "react";
import { FormikProvider, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
const AddressForm = ({handleCalculateShippingFee}) => {

    // Validate
    const validationSchema = Yup.object({
        province: Yup.string().required("Required"),
        district: Yup.string().required("Required"),
        ward: Yup.string().required("Required"),
        detail: Yup.string().required("Required"),
    });

    const handleSubmit = (values)=>{
        handleCalculateShippingFee(values)
    }

    const formik = useFormik({
        initialValues: {
            province: "",
            district: "",
            ward: "",
            detail: "",
        },
        validationSchema,
        onSubmit: handleSubmit,
    });
    const { values } = formik;

    return (
        <FormikProvider value={formik}>
            <Form>
                <h1 className="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>
                <span className="gl-text u-s-m-b-30">
                    Enter your shipping address to get a shipping estimate.
                </span>

                {/* Province */}
                {/* Province */}
                <div className="u-s-m-b-30">
                    <label className="gl-label" htmlFor="province">PROVINCE *</label>
                    <Field
                        className="input-text input-text--primary-style"
                        type="text"
                        name="province"
                        id="province"
                        placeholder="e.g., Hà Nội"
                    />
                    <ErrorMessage name="province" component="div" style={{ color: "red" }} />
                </div>

                {/* District */}
                <div className="u-s-m-b-30">
                    <label className="gl-label" htmlFor="district">DISTRICT *</label>
                    <Field
                        className="input-text input-text--primary-style"
                        type="text"
                        name="district"
                        id="district"
                        placeholder="e.g., Thanh Xuân"
                    />
                    <ErrorMessage name="district" component="div" style={{ color: "red" }} />
                </div>

                {/* Ward */}
                <div className="u-s-m-b-30">
                    <label className="gl-label" htmlFor="ward">WARD *</label>
                    <Field
                        className="input-text input-text--primary-style"
                        type="text"
                        name="ward"
                        id="ward"
                        placeholder="e.g., Phường Thanh Xuân Trung"
                    />
                    <ErrorMessage name="ward" component="div" style={{ color: "red" }} />
                </div>

                {/* Detail */}
                <div className="u-s-m-b-30">
                    <label className="gl-label" htmlFor="detail">DETAIL *</label>
                    <Field
                        className="input-text input-text--primary-style"
                        type="text"
                        name="detail"
                        id="detail"
                        placeholder="Số nhà, tên đường..."
                    />
                    <ErrorMessage name="detail" component="div" style={{ color: "red" }} />
                </div>


                <a className="btn btn--e-brand" onClick={()=>handleSubmit(values)}>Submit</a>
            </Form>
        </FormikProvider>
    );
};

export default AddressForm;
