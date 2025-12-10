import React from "react"
import { BarChart3, Users, Package, ShoppingCart } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts"
import '../../css/analytics.css'
// Data động (có thể lấy từ props hoặc API)
const revenueData = [
    { month: "Jan", value: 2500 },
    { month: "Feb", value: 3200 },
    { month: "Mar", value: 4800 },
    { month: "Apr", value: 3800 },
    { month: "May", value: 4600 },
    { month: "Jun", value: 5900 },
    { month: "Jul", value: 5300 },
    { month: "Aug", value: 6800 }
]

export function Analytics({ stats, chartData }) {
    // stats: { products, orders, customers, revenue } nếu muốn truyền từ ngoài vào
    const totalProducts = stats?.products || 48
    const totalOrders = stats?.orders || 120
    const totalCustomers = stats?.customers || 85
    const totalRevenue = stats?.revenue || 23659.80
    const chart = chartData || revenueData

    return (
        <>
                <h1 className="an-title">Analytics</h1>
                <div className="an-desc">Overview of store performance</div>
                <div className="an-cards-row">
                    <div className="an-card">
                        <div className="an-card-icon an-card-purple"><Package size={28}/></div>
                        <div>
                            <div className="an-card-value">{totalProducts}</div>
                            <div className="an-card-label">Products</div>
                        </div>
                    </div>
                    <div className="an-card">
                        <div className="an-card-icon an-card-blue"><ShoppingCart size={28}/></div>
                        <div>
                            <div className="an-card-value">{totalOrders}</div>
                            <div className="an-card-label">Orders</div>
                        </div>
                    </div>
                    <div className="an-card">
                        <div className="an-card-icon an-card-green"><Users size={28}/></div>
                        <div>
                            <div className="an-card-value">{totalCustomers}</div>
                            <div className="an-card-label">Customers</div>
                        </div>
                    </div>
                    <div className="an-card">
                        <div className="an-card-icon an-card-orange"><BarChart3 size={28}/></div>
                        <div>
                            <div className="an-card-value">${totalRevenue.toLocaleString()}</div>
                            <div className="an-card-label">Revenue</div>
                        </div>
                    </div>
                </div>
                {/* MINI LINE CHART */}
                <div className="an-mini-chart">
                    <div className="an-mini-chart-title">Revenue Over Time</div>
                    <ResponsiveContainer width="100%" height={180}>
                        <LineChart data={chart} margin={{ left: 15, right: 15, top: 18, bottom: 4 }}>
                            <CartesianGrid stroke="#f1f2f5" vertical={false}/>
                            <XAxis dataKey="month" stroke="#8f95a7" fontSize={13} tickMargin={8} />
                            <YAxis stroke="#8f95a7" fontSize={13} tickMargin={8} />
                            <Tooltip contentStyle={{ borderRadius: 8, fontSize: 13 }}/>
                            <Line type="monotone" dataKey="value" stroke="#3574ff" strokeWidth={3} dot={{ r: 4, fill: "#3574ff", strokeWidth: 0 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
        </>
    )
}
