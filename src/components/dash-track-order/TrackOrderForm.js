import React from "react";

const TrackOrderForm = () => (
  <form className="dash-track-order">
    <div className="gl-inline">
      <div className="u-s-m-b-30">
        <label className="gl-label" htmlFor="order-id">Order ID *</label>
        <input className="input-text input-text--primary-style" type="text" id="order-id" placeholder="Found in your confirmation email" />
      </div>
      <div className="u-s-m-b-30">
        <label className="gl-label" htmlFor="track-email">Email *</label>
        <input className="input-text input-text--primary-style" type="text" id="track-email" placeholder="Email you used during checkout" />
      </div>
    </div>
    <button className="btn btn--e-brand-b-2" type="submit">TRACK</button>
  </form>
);

export default TrackOrderForm;