import React from "react"
import { Package, Truck,Boxes, BarChart3, Users, Settings } from "lucide-react"
import "../../css/sidebar.css"

export function Sidebar({ activeTab, setActiveTab }) {
    const menuItems = [
        { id: "track-order", label: "Track Orders", icon: Truck },
        { id: "product-management", label: "Product Management", icon: Package },
        { id: "category-management", label: "Category Management", icon: Boxes  },
        { id: "analytics", label: "Analytics", icon: BarChart3 },
        { id: "customers", label: "Customers", icon: Users },
        { id: "settings", label: "Settings", icon: Settings },
    ]
    return (
        <div className="sidebar">
            <div className="sidebar-header">Admin Dashboard</div>
            <nav className="sidebar-nav">
                {menuItems.map((item) => {
                    const Icon = item.icon
                    return (
                        <button
                            key={item.id}
                            className={activeTab === item.id ? "active" : ""}
                            onClick={() => setActiveTab(item.id)}
                        >
                            <Icon />
                            {item.label}
                        </button>
                    )
                })}
            </nav>
        </div>
    )
}
