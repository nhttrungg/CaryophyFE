import React from "react";
import AddressBookBreadcrumb from "../../components/dash-address-book/AddressBookBreadcrumb";
import DashboardSidebar from "../../components/dash-address-book/DashboardSidebar";
import AddressBookHeader from "../../components/dash-address-book/AddressBookHeader";
import AddressBookTable from "../../components/dash-address-book/AddressBookTable";

const AddressBookPage = () => (
    <div className="app-content">
        <AddressBookBreadcrumb />
        <div className="u-s-p-b-60">
            <div className="section__content">
                <div className="dash">
                    <div className="container">
                        <div className="row">
                            <DashboardSidebar />
                            <div className="col-lg-9 col-md-12">
                                <AddressBookHeader />
                                <AddressBookTable />
                                <div>
                                    <a className="dash__custom-link btn--e-brand-b-2" href="address-add">
                                        <i className="fas fa-plus u-s-m-r-8"></i>
                                        <span>Add New Address</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default AddressBookPage;