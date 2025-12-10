import React from "react";

const AddressBookHeader = () => (
    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
        <div className="dash__pad-2">
            <div className="dash__address-header">
                <h1 className="dash__h1">Address Book</h1>
                <div>
          <span className="dash__link dash__link--black u-s-m-r-8">
            <a href="dash-address-make-default.html">Make default shipping address</a>
          </span>
                    <span className="dash__link dash__link--black">
            <a href="dash-address-make-default.html">Make default shipping address</a>
          </span>
                </div>
            </div>
        </div>
    </div>
);

export default AddressBookHeader;