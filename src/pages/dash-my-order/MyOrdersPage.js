import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/dash-my-order/Breadcrumb";
import DashboardSidebar from "../../components/dash-my-order/DashboardSidebar";
import OrderFilter from "../../components/dash-my-order/OrderFilter";
import OrderItem from "../../components/dash-my-order/OrderItem";
import { orderApi } from "../../js/apiService";
import Pagination from "../../components/base/Pagenation";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(0); // 0-based
  const [size] = useState(5); // số lượng đơn hàng mỗi trang
  const [total, setTotal] = useState(0); // tổng số đơn hàng

  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize] = useState(5); // số đơn hàng mỗi trang

  const totalOrders = orders.length;
  const totalPages = Math.ceil(totalOrders / pageSize);

  const pagedOrders = orders.slice(
      currentPage * pageSize,
      (currentPage + 1) * pageSize
  );


  const fetchOrders = async () => {
    try {
      const res = await orderApi.getAll(page + 1, size); // backend dùng 1-based?
      setOrders(res);
      setTotal(res.size); // backend cần trả về `total`
    } catch (error) {
      console.error("Lỗi khi fetch đơn hàng:", error);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [page]);

  return (
      <div className="app-content">
        <Breadcrumb />
        <div className="u-s-p-b-60">
          <div className="section__content">
            <div className="dash">
              <div className="container">
                <div className="row">
                  <div className="col-lg-3 col-md-12">
                    <DashboardSidebar />
                  </div>
                  <div className="col-lg-9 col-md-12">
                    <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                      <div className="dash__pad-2">
                        <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>
                        <span className="dash__text u-s-m-b-30">
                        Here you can see all products that have been delivered.
                      </span>
                        <OrderFilter />
                        <div className="m-order__list">
                          {pagedOrders.map((order, idx) => (
                              <OrderItem order={order} key={idx} />
                          ))}
                        </div>

                        {/* Pagination */}
                        <Pagination
                            page={currentPage}
                            size={pageSize}
                            total={totalOrders}
                            onPageChange={setCurrentPage}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default MyOrdersPage;
