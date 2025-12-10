import React from "react";

const AddressBookTable = () => (
    <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius u-s-m-b-30">
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
                        <a className="address-book-edit btn--e-transparent-platinum-b-2" href="address-edit">Edit</a>
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
                        <a className="address-book-edit btn--e-transparent-platinum-b-2" href="address-edit">Edit</a>
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
);

export default AddressBookTable;