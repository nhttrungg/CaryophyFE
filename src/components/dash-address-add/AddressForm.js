import React from "react";

const AddressForm = () => (
    <form className="dash-address-manipulation">
        <div className="gl-inline">
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-fname">FIRST NAME *</label>
                <input className="input-text input-text--primary-style" type="text" id="address-fname" placeholder="First Name" />
            </div>
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-lname">LAST NAME *</label>
                <input className="input-text input-text--primary-style" type="text" id="address-lname" placeholder="Last Name" />
            </div>
        </div>
        <div className="gl-inline">
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-phone">PHONE *</label>
                <input className="input-text input-text--primary-style" type="text" id="address-phone" />
            </div>
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-street">STREET ADDRESS *</label>
                <input className="input-text input-text--primary-style" type="text" id="address-street" placeholder="House Name and Street" />
            </div>
        </div>
        <div className="gl-inline">
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-country">COUNTRY *</label>
                <select className="select-box select-box--primary-style" id="address-country">
                    <option value="">Choose Country</option>
                    <option value="uae">United Arab Emirate (UAE)</option>
                    <option value="uk">United Kingdom (UK)</option>
                    <option value="us">United States (US)</option>
                </select>
            </div>
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-state">STATE/PROVINCE *</label>
                <select className="select-box select-box--primary-style" id="address-state">
                    <option value="">Choose State/Province</option>
                    <option value="al">Alabama</option>
                    <option value="al">Alaska</option>
                    <option value="ny">New York</option>
                </select>
            </div>
        </div>
        <div className="gl-inline">
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-city">TOWN/CITY *</label>
                <input className="input-text input-text--primary-style" type="text" id="address-city" />
            </div>
            <div className="u-s-m-b-30">
                <label className="gl-label" htmlFor="address-postal">ZIP/POSTAL CODE *</label>
                <input className="input-text input-text--primary-style" type="text" id="address-postal" placeholder="Zip/Postal Code" />
            </div>
        </div>
        <button className="btn btn--e-brand-b-2" type="submit">SAVE</button>
    </form>
);

export default AddressForm;