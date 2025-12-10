import React from "react";
import TrackOrderBreadcrumb from "../../components/dash-track-order/TrackOrderBreadcrumb";
import TrackOrderForm from "../../components/dash-track-order/TrackOrderForm";
import DashboardSidebar from "../../components/dash-track-order/DashboardSidebar";

const TrackOrderPage = () => (
  <div className="app-content">
    <TrackOrderBreadcrumb />
    <div className="u-s-p-b-60">
      <div className="section__content">
        <div className="dash">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-12">
                <DashboardSidebar />
              </div>
              <div className="col-lg-9 col-md-12">
                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                  <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Track your Order</h1>
                    <span className="dash__text u-s-m-b-30">
                      To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.
                    </span>
                    <TrackOrderForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TrackOrderPage;