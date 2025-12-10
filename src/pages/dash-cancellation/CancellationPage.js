import React from "react";
import CancellationBreadcrumb from "../../components/dash-cancellation/CancellationBreadcrumb";
import DashboardSidebar from "../../components/dash-cancellation/DashboardSidebar";
import CancellationContent from "../../components/dash-cancellation/CancellationContent";

const CancellationPage = () => (
    <div className="app-content">
        <CancellationBreadcrumb />
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="dash">
                    <div className="container">
                        <div className="row">
                            <DashboardSidebar />
                            <div className="col-lg-9 col-md-12">
                                <CancellationContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default CancellationPage;