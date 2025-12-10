import React from 'react';
import PaymentOptionBreadcrumb from '../../components/dash-payment-option/PaymentOptionBreadcrumb';
import PaymentOptionDashboard from '../../components/dash-payment-option/PaymentOptionDashboard';

const PaymentOptionPage = () => (
    <div className="app-content">
        <PaymentOptionBreadcrumb />
        <PaymentOptionDashboard />
    </div>
);

export default PaymentOptionPage;