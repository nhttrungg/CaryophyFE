import React from 'react';
import DashboardBreadcrumb from '../../components/dashboard/DashboardBreadcrumb';
import DashboardSidebar from '../../components/dashboard/DashboardSidebar';
import DashboardStats from '../../components/dashboard/DashboardStats';
import DashboardMainContent from '../../components/dashboard/DashboardMainContent';

const DashboardPage = () => (
    <div className="app-content">
        <DashboardBreadcrumb />
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
                                <DashboardMainContent />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default DashboardPage;