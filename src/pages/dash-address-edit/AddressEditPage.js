import React from "react";
import AddressEditBreadcrumb from "../../components/dash-address-edit/AddressEditBreadcrumb";
import DashboardSidebar from "../../components/dash-address-book/DashboardSidebar";
import AddressEditForm from "../../components/dash-address-edit/AddressEditForm";

const AddressEditPage = () => (
    <div className="app-content">
        <AddressEditBreadcrumb />
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="dash">
                    <div className="container">
                        <div className="row">
                            <DashboardSidebar />
                            <div className="col-lg-9 col-md-12">
                                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                    <div className="dash__pad-2">
                                        <h1 className="dash__h1 u-s-m-b-14">Edit Address</h1>
                                        <span className="dash__text u-s-m-b-30">
                      We need an address where we could deliver products.
                    </span>
                                        <AddressEditForm />
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

export default AddressEditPage;