import { httpClient } from "./HttpClient";

// ========== AUTH ========== //
export const authApi = {
    login: (username, password) => httpClient.post("/auth/login", { username, password }),
    register: (email, password) => httpClient.post("/auth/register", { email, password })
};

// ========== PRODUCT ========== //
export const productApi = {
    getAll:   ()           => httpClient.get("/products"),
    getById: (id)          => httpClient.get(`/products/${id}`),
    create:  (data)        => httpClient.post("/products", data),
    update:  (id, data)    => httpClient.put(`/products/${id}`, data),
    delete:  (id)          => httpClient.delete(`/products/${id}`),
    search: (filters)      => httpClient.post('/products/search',filters),
    getCustomerAlsoViewed: (productId) => httpClient.get(`/products/${productId}/also-viewed`),
    getByCategoryId: (id)  => httpClient.get(`/products/category/${id}`),

};

// ========== ORDER ========== //
export const orderApi = {
    getAll:   ()           => httpClient.get("/orders"),
    getById: (id)          => httpClient.get(`/orders/${id}`),
    create:  (data)        => httpClient.post("/orders", data),
    createWithProducts: (request) =>
        httpClient.post("/orders/with-products", request ),
    update:  (id, data)    => httpClient.put(`/orders/${id}`, data),
    delete:  (id)          => httpClient.delete(`/orders/${id}`),
    updatePayment: (id,method) => httpClient.put(`/orders/update-method?orderId=${id}&paymentMethod=${method}`),
    updateStatus: (orderId) => httpClient.put(`/orders/update-status?orderId=${orderId}`),
};

// ========== CART ========== //
export const cartApi = {
    getCart:     ()             => httpClient.get("/cart"),
    getItem:    (id)            => httpClient.get(`/cart/${id}`),
    addToCart:  (productId, quantity) =>
        httpClient.post("/cart", { productId, quantity }),
    updateItem: (id, quantity)  => httpClient.put(`/cart/${id}`, { quantity }),
    deleteItem: (id)            => httpClient.delete(`/cart/${id}`),
    clearCart:  ()              => httpClient.delete("/cart")
};

// ========== REVIEW ========== //
export const reviewApi = {
    getAll:    ()                    => httpClient.get("/reviews"),
    getById:  (id)                   => httpClient.get(`/reviews/${id}`),
    getByProduct: (productId)        => httpClient.get(`/reviews/product/${productId}`),
    create:   (res) =>
        httpClient.post("/reviews", res),
    update:   (id, productId, rating, comment) =>
        httpClient.put(`/reviews/${id}`, { productId, rating, comment }),
    delete:   (id)                   => httpClient.delete(`/reviews/${id}`)
};

// ========== USER ========== //
export const userApi = {
    getAll:   ()         => httpClient.get("/user"),
    getById: (id)        => httpClient.get(`/user/${id}`),
    create:  (data)      => httpClient.post("/user", data),
    update:  (id, data)  => httpClient.put(`/user/${id}`, data),
    delete:  (id)        => httpClient.delete(`/user/${id}`)
};

// ========== Category ========== //
export const categoryApi = {
    getAll:   ()           => httpClient.get("/category"),
    create:  (data)        => httpClient.post("/category", data),
    update:  (id, data)    => httpClient.put(`/category/${id}`, data),
    delete:  (id)          => httpClient.delete(`/category/${id}`),
};

// =========== Upload image ========== //
export const uploadImage = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return httpClient.post('/files/upload', formData, {
        headers: { "Content-Type": "multipart/form-data" }
    });
};

// ========== WISHLIST ========== //
export const wishlistApi = {
    getWishlist: () =>                      httpClient.get("/wishlist"),
    addToWishlist: (productId) =>           httpClient.post("/wishlist", { productId }),
    deleteItem: (wishlistItemId) => httpClient.delete(`/wishlist/${wishlistItemId}`),
    clearWishlist: () =>                    httpClient.delete("/wishlist")
};
