import React, { useEffect, useState } from "react";
import { Edit2, Trash2, Search } from "lucide-react";
import "../../css/manageview.css";
import { orderApi } from "../../js/apiService";
import Pagination from "../../components/base/Pagenation";

export function OrderManager() {
    const [orders, setOrders] = useState([]);
    const [search, setSearch] = useState("");
    const [type, setType] = useState("orders");
    const [order, setOrder] = useState(null);
    const [selectedOrders, setSelectedOrders] = useState([]);
    const [selectedAll, setSelectedAll] = useState(false);

    // Pagination
    const [page, setPage] = useState(0);
    const pageSize = 5;

    const badgeColor = (s) => ({
        delivered: "pm-badge-green",
        shipped: "pm-badge-purple",
        processing: "pm-badge-blue",
        pending: "pm-badge-yellow"
    }[s] || "");

    const fetchOrders = async () => {
        const resp = await orderApi.getAll();
        setOrders(resp);
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handleOrderDetail = async (id) => {
        const orderMock = await orderApi.getById(id);
        setTimeout(() => {
            setOrder(orderMock);
            setType("detail");
        }, 300);
    };

    const handleSelectOrder = (e, orderId) => {
        e.stopPropagation();
        if (e.target.checked) {
            setSelectedOrders(prev => [...prev, orderId]);
        } else {
            setSelectedOrders(prev => prev.filter(id => id !== orderId));
        }
    };

    const handleSelectAll = (e) => {
        const currentPageIds = paginatedOrders.map(o => o.orderId);
        setSelectedAll(e.target.checked);
        if (e.target.checked) {
            setSelectedOrders(prev => Array.from(new Set([...prev, ...currentPageIds])));
        } else {
            setSelectedOrders(prev => prev.filter(id => !currentPageIds.includes(id)));
        }
    };

    const handleApproveSelected = async () => {
        for (const orderId of selectedOrders) {
            await orderApi.updateStatus(orderId);
        }
        await fetchOrders();
        setSelectedOrders([]);
        setSelectedAll(false);
    };

    // Filter
    const filtered = orders.filter(o =>
        o.orderId.toString().includes(search) ||
        o.user?.fullName?.toLowerCase().includes(search.toLowerCase())
    );

    // Pagination logic
    const paginatedOrders = filtered.slice(page * pageSize, (page + 1) * pageSize);
    const totalPages = Math.ceil(filtered.length / pageSize);

    return (
        <>
            {type === "orders" && (
                <div className="pm-section">
                    <div className="pm-header-row">
                        <div>
                            <h1 className="pm-title">Order Management</h1>
                            <div className="pm-desc">Manage and track your orders</div>
                        </div>
                    </div>

                    <div className="pm-card">
                        <div className="pm-card-title">Search Orders</div>
                        <div className="pm-search-row">
                            <Search className="pm-search-icon" />
                            <input
                                className="pm-search-input"
                                placeholder="Search by order ID or customer name..."
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                    setPage(0);
                                }}
                            />
                        </div>
                    </div>


                    <div className="pm-card">
                        <div className="pm-card-title">Orders ({filtered.length})</div>
                        <table className="pm-table">
                            <thead>
                            <tr>
                                <th>
                                    <input
                                        type="checkbox"
                                        onChange={handleSelectAll}
                                        checked={paginatedOrders.every(o => selectedOrders.includes(o.orderId))}
                                    />
                                </th>
                                <th>ID</th>
                                <th>Total</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {paginatedOrders.map((o) => (
                                <tr key={o.orderId} onClick={() => handleOrderDetail(o.orderId)}>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={selectedOrders.includes(o.orderId)}
                                            onChange={(e) => handleSelectOrder(e, o.orderId)}
                                            onClick={(e) => e.stopPropagation()}
                                        />
                                    </td>
                                    <td>{o.orderId}</td>
                                    <td>${o.grandTotal}</td>
                                    <td>
                                    <span className={"pm-badge " + badgeColor(o.orderStatus.toLowerCase())}>
                                        {o.orderStatus}
                                    </span>
                                    </td>
                                    <td>{o.createdAt}</td>
                                    <td>
                                        <button className="pm-action-btn"><Edit2 size={16} /></button>
                                        <button className="pm-action-btn pm-action-delete"><Trash2 size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>

                        <Pagination
                            page={page}
                            size={pageSize}
                            total={filtered.length}
                            onPageChange={setPage}
                        />
                    </div>
                </div>
            )}

            {type === "detail" && order && (
                <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
                    <h2>Order Details</h2>

                    <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "20px" }}>
                        <button
                            onClick={() => setType("orders")}
                            style={{
                                padding: "8px 16px",
                                backgroundColor: "#e7e7e7",
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                transition: "background 0.2s"
                            }}
                            onMouseOver={e => e.currentTarget.style.backgroundColor = "#d6d6d6"}
                            onMouseOut={e => e.currentTarget.style.backgroundColor = "#e7e7e7"}
                        >
                            ← Back
                        </button>
                    </div>

                    <div style={{ border: "1px solid #eee", padding: "16px", borderRadius: "8px" }}>
                        <p><strong>Order #{order.orderId}</strong></p>
                        <p>Placed on {new Date(order.createdAt).toLocaleString()}</p>
                    </div>

                    <div style={{ marginTop: "20px", border: "1px solid #eee", padding: "16px", borderRadius: "8px" }}>
                        <h4>Package</h4>
                        <p>Status: {order.orderStatus}</p>

                        {order.orderDetails.map((detail) => (
                            <div
                                key={detail.orderDetailId}
                                style={{ display: "flex", alignItems: "center", marginTop: "20px" }}
                            >
                                <img
                                    src={detail.product?.imageUrl}
                                    alt={detail.product?.name}
                                    width={60}
                                    height={60}
                                    style={{ objectFit: "cover", borderRadius: "4px" }}
                                />
                                <div style={{ marginLeft: "16px" }}>
                                    <h4>{detail.product?.name}</h4>
                                    <p>Quantity: {detail.quantity}</p>
                                    <p>Price: ${detail.price.toLocaleString()}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                        <div style={{ border: "1px solid #eee", padding: "16px", borderRadius: "8px", width: "48%" }}>
                            <h4>Shipping Address</h4>
                            <p>{order.user?.fullName || "Unknown"}</p>
                            <p>{order.address}</p>
                            <p>{order.user?.phone || "(no phone)"}</p>
                        </div>
                        <div style={{ marginTop: "20px", border: "1px solid #eee", padding: "16px", borderRadius: "8px", width: "50%" }}>
                            <h4>Total Summary</h4>
                            <p>Subtotal: ${order.totalAmount.toLocaleString()}</p>
                            <p>Shipping Fee: ${order.shipCost.toFixed(2)}</p>
                            <p><strong>Total: ${order.grandTotal.toLocaleString()}</strong></p>
                            <p>Paid by {order.payments[0]?.paymentMethod || "Cash on Delivery"}</p>
                        </div>
                    </div>

                    {order.orderStatus.toLowerCase() !== "delivered" && (
                        <button
                            onClick={async () => {
                                const currentStatus = order.orderStatus.toLowerCase();
                                const nextStatusMap = {
                                    pending: "waiting_payment",
                                    waiting_payment: "confirmed",
                                    confirmed: "processing",
                                    processing: "shipping",
                                    shipping: "delivered"
                                };

                                const nextStatus = nextStatusMap[currentStatus];
                                if (!nextStatus) return;

                                await orderApi.updateStatus(order.orderId, nextStatus); // cần sửa API nếu cần
                                await fetchOrders();
                                setType("orders");
                            }}
                            style={{
                                marginTop: "20px",
                                padding: "10px 20px",
                                backgroundColor: "#28a745",
                                color: "white",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Approve this order
                        </button>
                    )}
                </div>
            )}
        </>
    );
}
