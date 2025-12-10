import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import DashboardStats from './DashboardStats';
import PaymentOptionContent from './PaymentOptionContent';

const PaymentOptionDashboard = () => (
    <div className="u-s-p-b-60">
        <div className="section__content">
            <div className="dash">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <DashboardSidebar />
                            <DashboardStats />
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <PaymentOptionContent />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default PaymentOptionDashboard;