import React from "react";

const DeliveryInformationForm = ({ order }) => {
  const { user, address, note } = order;
  const addressParts = address?.split(",") || [];

  console.log(addressParts)

  return (
      <form className="checkout-f__delivery">
        <div className="u-s-m-b-30">
          <div className="gl-inline">
            <div className="u-s-m-b-15">
              <label className="gl-label" htmlFor="billing-fname">FIRST NAME *</label>
              <input className="input-text input-text--primary-style" type="text" id="billing-fname" value={user?.fullName || ""} readOnly />
            </div>
          </div>
          <div className="u-s-m-b-15">
            <label className="gl-label" htmlFor="billing-email">E-MAIL *</label>
            <input className="input-text input-text--primary-style" type="text" id="billing-email" value={user?.email || ""} readOnly />
          </div>
          <div className="u-s-m-b-15">
            <label className="gl-label" htmlFor="billing-phone">PHONE *</label>
            <input className="input-text input-text--primary-style" type="text" id="billing-phone" value={user?.phone || ""} readOnly />
          </div>
          <div className="u-s-m-b-15">
            <label className="gl-label" htmlFor="billing-town-city">PROVINCE *</label>
            <input className="input-text input-text--primary-style" type="text" id="billing-town-city" value={addressParts[0] || ""} readOnly />
          </div>
          <div className="u-s-m-b-15">
            <label className="gl-label" htmlFor="billing-state">DISTRICT *</label>
            <input className="input-text input-text--primary-style" type="text" id="billing-state" value={addressParts[1] || ""} readOnly />
          </div>
          <div className="u-s-m-b-15">
            <label className="gl-label" htmlFor="billing-state">WARD *</label>
            <input className="input-text input-text--primary-style" type="text" id="billing-state" value={addressParts[2] || ""} readOnly />
          </div>
          <div className="u-s-m-b-15">
            <label className="gl-label" htmlFor="billing-state">DETAIL *</label>
            <input className="input-text input-text--primary-style" type="text" id="billing-state" value={addressParts[3] || ""} readOnly />
          </div>
          <div className="u-s-m-b-10">
            <label className="gl-label" htmlFor="order-note">ORDER NOTE</label>
            <textarea className="text-area text-area--primary-style" id="order-note" value={note || ""} readOnly></textarea>
          </div>
        </div>
      </form>
  );
};

export default DeliveryInformationForm;
