// loginUtils.js

const STORAGE_KEY = 'ecom_admin_user' // Key lưu thông tin user vào localStorage

// Hàm đăng nhập (giả lập, thực tế nhận user từ backend sau khi xác thực thành công)
export function login(userObj) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userObj))
}

// Hàm đăng xuất: xoá user khỏi localStorage
export function logout() {
    localStorage.removeItem(STORAGE_KEY)
}

// Lấy thông tin user hiện tại (null nếu chưa login)
export function getUser() {
    const str = localStorage.getItem(STORAGE_KEY)
    if (!str) return null
    try {
        return JSON.parse(str)
    } catch {
        return null
    }
}

// Lấy role của user hiện tại (null nếu chưa login)
export function getRole() {
    const user = getUser()
    return user ? user.role : null
}

// Kiểm tra đã đăng nhập hay chưa
export function isLoggedIn() {
    return !!getUser()
}
