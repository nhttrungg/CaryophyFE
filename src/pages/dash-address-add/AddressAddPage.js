import React from "react";
import AddressAddBreadcrumb from "../../components/dash-address-add/AddressAddBreadcrumb";
import DashboardSidebar from "../../components/dash-address-add/DashboardSidebar";
import AddressForm from "../../components/dash-address-add/AddressForm";
import DashboardStats from "../../components/dash-address-add/DashboardStats";

const AddressAddPage = () => (
    <div className="app-content">
        <AddressAddBreadcrumb />
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="dash">
                    <div className="container">
                        <div className="row">
                            <DashboardSidebar />
                            <div className="col-lg-9 col-md-12">
                                <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                                    <div className="dash__pad-2">
                                        <h1 className="dash__h1 u-s-m-b-14">Add new Address</h1>
                                        <span className="dash__text u-s-m-b-30">
                      We need an address where we could deliver products.
                    </span>
                                        <AddressForm />
                                    </div>
                                </div>
                                <DashboardStats />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AddressAddPage;