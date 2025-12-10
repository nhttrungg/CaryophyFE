import React,{useEffect,useState} from 'react';
import WishlistBreadcrumb from "../../components/wishlist/WishlistBreadcrumb";
import WishlistProductList from "../../components/wishlist/WishlistProductList";
import WishlistActions from "../../components/wishlist/WishlistAcction";
import {wishlistApi} from "../../js/apiService";
import {toast} from "react-toastify";

const WishlistPage = () => {
    const [wishlistItems, setWishlistItems] = useState([]);

    const fetchWishlistItems = async () => {
        try{
            const res = await wishlistApi.getWishlist();
            setWishlistItems(res.map(r => {
                let product = r.product;
                product.wishlistItemId = r.wishlistItemId;
                return product;
            }))
        }catch (error) {
            console.log(error)
            toast.error("Không thể tải danh sách yêu thích.");
        }
    };
    const onRemove = async (wishlistItemId) => {
        try {
            await wishlistApi.deleteItem(wishlistItemId);
            setWishlistItems(prev => prev.filter(item => item.wishlistItemId !== wishlistItemId));
            toast.success("Đã xóa khỏi danh sách yêu thích.");
        } catch (error) {
            console.error(error);
            toast.error("Không thể xóa sản phẩm.");
        }
    };
    useEffect(() => {
        fetchWishlistItems();
    }, []);

    console.log("Wishlist items:", wishlistItems);
    return(
        <div className="app-content">
            <WishlistBreadcrumb />
            <div className="u-s-p-b-60">
                <div className="section__intro u-s-m-b-60">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary">Wishlist</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <WishlistProductList
                                    wishlistItems={wishlistItems}
                                    onRemove={onRemove}
                                />
                            </div>
                            <div className="col-lg-12">
                                <WishlistActions />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WishlistPage;