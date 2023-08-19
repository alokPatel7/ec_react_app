import AdminDashboard from "../views/admin/AdminDashboard/AdminDashboard";
import SellerDashboard from "../views/seller/SellerDashboard/SellerDashboard";
import UserDashboard from "../views/user/UserDashboard/UserDashboard";

const adminRouting = [
    { path: '/dashboard', component: <AdminDashboard /> }
]
const userRouting = [
    { path: '/dashboard', component: <UserDashboard /> }
]
const sellerRouting = [
    { path: '/dashboard', component: <SellerDashboard /> }
]

export const getRoutingArrayByRole = (role) => {
    switch (role) {
        case 'admin':
            return adminRouting;
        case 'seller':
            return sellerRouting;
        default:
            return userRouting;
    }
}