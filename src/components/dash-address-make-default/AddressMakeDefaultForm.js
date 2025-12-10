import React from "react";

const AddressMakeDefaultForm = () => (
    <form className="dash__address-make">
        <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
            <h2 className="dash__h2 u-s-p-xy-20">Make default Shipping Address</h2>
            <div className="dash__table-2-wrap gl-scroll">
                <table className="dash__table-2">
                    <thead>
                    <tr>
                        <th>Action</th>
                        <th>Full Name</th>
                        <th>Address</th>
                        <th>Region</th>
                        <th>Phone Number</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <div className="radio-box">
                                <input type="radio" id="address-1" name="default-address" defaultChecked />
                                <div className="radio-box__state radio-box__state--primary">
                                    <label className="radio-box__label" htmlFor="address-1"></label>
                                </div>
                            </div>
                        </td>
                        <td>John Doe</td>
                        <td>4247 Ashford Drive Virginia VA-20006 USA</td>
                        <td>Virginia VA-20006 USA</td>
                        <td>(+0) 900901904</td>
                        <td>
                            <div className="gl-text">Default Shipping Address</div>
                            <div className="gl-text">Default Billing Address</div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="radio-box">
                                <input type="radio" id="address-2" name="default-address" />
                                <div className="radio-box__state radio-box__state--primary">
                                    <label className="radio-box__label" htmlFor="address-2"></label>
                                </div>
                            </div>
                        </td>
                        <td>Doe John</td>
                        <td>1484 Abner Road</td>
                        <td>Eau Claire WI - Wisconsin</td>
                        <td>(+0) 7154419563</td>
                        <td></td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
        </div>
    </form>
);

export default AddressMakeDefaultForm;