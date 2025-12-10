// Đẹp hóa layout dashboard bằng CSS dự án và tối ưu bố cục
import { useState } from "react"
import { Sidebar } from "../../components/admin/Sidebar"
import '../../css/admindashboard.css'
import {OrderManager} from "../../components/admin/TrackerOrder";
import {ProductManager} from "../../components/admin/ProductManagement";
import {CategoryManager} from "../../components/admin/CategoryManagement";
import {Analytics} from "../../components/admin/Analytics";


export function AdminDashboard() {
    const [activeTab, setActiveTab] = useState("track-order")
    return (
        <div className="admin-dashboard-wrapper u-h-100 u-bg-light">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="admin-dashboard-main">
                <div className="admin-dashboard-content">
                    {activeTab === "track-order" && <OrderManager />}
                    {activeTab === "product-management" && <ProductManager />}
                    {activeTab === "category-management" && <CategoryManager />}
                    {activeTab === "analytics" && <Analytics />}
                </div>
            </main>
        </div>
    )
}
