import React from "react";
import AddressMakeDefaultBreadcrumb from "../../components/dash-address-make-default/AddressMakeDefaultBreadcrumb";
import DashboardSidebar from "../../components/dash-address-book/DashboardSidebar";
import AddressMakeDefaultForm from "../../components/dash-address-make-default/AddressMakeDefaultForm";

const AddressMakeDefaultPage = () => (
    <div className="app-content">
        <AddressMakeDefaultBreadcrumb />
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="dash">
                    <div className="container">
                        <div className="row">
                            <DashboardSidebar />
                            <div className="col-lg-9 col-md-12">
                                <AddressMakeDefaultForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AddressMakeDefaultPage;