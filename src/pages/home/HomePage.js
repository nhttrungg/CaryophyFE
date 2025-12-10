// src/pages/HomePage.js
import React, {useEffect, useState} from 'react';
import HeroSlider from "../../components/home/slider/HeroSlider";
import DealsSection from "../../components/home/deals/DealsSection";
import TrendingSection from "../../components/home/trend/TrendSection";
import DealOfTheDaySection from "../../components/home/deals/DealOfTheDaySetion";
import TestimonialSection from "../../components/home/testimonials/TestimonialSection";
import {getUser} from "../../utils/AuthUtils";
import {AdminDashboard} from "../admin/DashboardMother";
import {cartApi, wishlistApi} from "../../js/apiService";

const HomePage = () => {
    const [role,setRole] = useState('anonymous')
    const [quantity,setQuantity] = useState(1);
    useEffect(() => {
        const user = getUser();
        if(user){
            setRole(user.users.role)
        }
    }, []);

    const handleAddToCart = (product) => {
        cartApi.addToCart(product.productId,quantity)
    };

    const handleAddToWishlist = (product) => {
        wishlistApi.addToWishlist(product.productId)
    };

    return (
        <>
            {(role.toLowerCase() === 'user' || role.toLowerCase() === 'anonymous') && (
                <main className="app-content">
                    {/* Hero Slider Section */}
                    <div className="s-skeleton s-skeleton--h-600 s-skeleton--bg-grey">
                        <HeroSlider />
                    </div>

                    {/* Shop By Deals Section */}
                    <div className="u-s-p-y-60">
                        <DealsSection />
                    </div>

                    {/* Trending Products Section */}
                    <div className="u-s-p-b-60">
                        <TrendingSection
                            handleAddToCart={handleAddToCart}
                            addToWishlist={handleAddToWishlist}
                        />
                    </div>

                </main>
            )}

            {role.toLowerCase() === 'admin' && (
                <AdminDashboard />
            )}
        </>

    );
};

export default HomePage;