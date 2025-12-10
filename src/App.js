import './App.css';
import React, { useEffect, useState } from "react";
import PageHeader from '../src/components/base/PageHeader';
import Footer from "./components/base/PageFooter";
import LoginPage from "./pages/login/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/signup/SignupPage";
import HomePage from "./pages/home/HomePage"
import './css/utility.css';
import './css/vendor.css';
import './css/app.css';
import './css/carousel.css';
import WishlistPage from "./pages/wishlist/WishlistPage";
import ShopGrid from "./pages/shopgrid/NewArrival";
import ProductDetailPage from './pages/product-detail/ProductDetailPage';
import ContactPage from "./pages/contact/ContactPage";
import CheckoutPage from './pages/checkout/CheckoutPage';
import MyOrdersPage from './pages/dash-my-order/MyOrdersPage';
import ProfilePage from './pages/dash-my-profile/ProfilePage';
import TrackOrderPage from './pages/trackorder/TrackOrderPage';
import AddressAddPage from "./pages/dash-address-add/AddressAddPage";
import AddressBookPage from "./pages/dash-address-book/AddressBookPage";
import AddressEditPage from "./pages/dash-address-edit/AddressEditPage";
import AddressMakeDefaultPage from "./pages/dash-address-make-default/AddressMakeDefaultPage";
import CancellationPage from "./pages/dash-cancellation/CancellationPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import PaymentOptionPage from "./pages/dash-payment-option/PaymentOptionPage";
import ManageOrderPage from "./pages/dash-manage-order/ManageOrderPage";
import EditProfilePage from "./pages/dash-edit-profile/EditProfilePage";
import { getUser } from "./utils/AuthUtils";
import CartPage from "./pages/CartPage/CartPage";



function App() {
    const [user, setUser] = useState();
    const [role, setRole] = useState('anonymous');
    useEffect(() => {
        const fetchedUser = getUser();
        setUser(fetchedUser);
    }, []);

    useEffect(() => {
        if (user) {
            setRole(user.users.role);
        }
    }, [user]);

    const handleLogin = (role) => {
        const fetchedUser = getUser();
        setUser(fetchedUser);
        setRole(role);
    };

    return (
        <div className="App">
            <PageHeader userId={user?.users?.role} role={role} />
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/signin" element={<LoginPage loginLoad={handleLogin} />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/product-detail/:id" element={<ProductDetailPage />} />
                <Route path="/wishlist" element={<WishlistPage />} />
                <Route path="/checkout/:orderId" element={<CheckoutPage />} />
                <Route path="/my-order" element={<MyOrdersPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/edit-profile" element={<EditProfilePage />} />
                <Route path="/manage-order" element={<ManageOrderPage />} />
                <Route path="/payment-option" element={<PaymentOptionPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/track-order" element={<TrackOrderPage />} />
                <Route path="/address-add" element={<AddressAddPage />} />
                <Route path="/address-book" element={<AddressBookPage />} />
                <Route path="/address-edit" element={<AddressEditPage />} />
                <Route path="/address-make-default" element={<AddressMakeDefaultPage />} />
                <Route path="/cancellation" element={<CancellationPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/shop" element={<ShopGrid />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
            <Footer />

        </div>
    );
}

export default App;
