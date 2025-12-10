import React from 'react';
import BreadcrumbSection from '../../components/dash-manage-order/ManageOrderBreadcrumb';
import DashboardSection from '../../components/dash-manage-order/ManageOrderDashboard';

const ManageOrderPage = () => (
    <div className="app-content">
        <BreadcrumbSection />
        <DashboardSection />
    </div>
);

export default ManageOrderPage;