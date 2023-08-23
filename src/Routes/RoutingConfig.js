import AdminDashboard from "../views/admin/AdminDashboard/AdminDashboard";
import AddProductComponent from "../views/seller/AddProduct/AddProduct";
import ProductList from "../views/seller/ProductList/ProductList";
import SellerDashboard from "../views/seller/SellerDashboard/SellerDashboard";
import ViewProduct from "../views/seller/ViewProduct/ViewProduct";
import UserDashboard from "../views/user/UserDashboard/UserDashboard";

const adminRouting = [
    { path: '/dashboard', component: <AdminDashboard /> }
]
const userRouting = [
    { path: '/dashboard', component: <UserDashboard /> }
]
const sellerRouting = [
    { path: '/dashboard', component: <SellerDashboard /> },
    { path: '/add-product', component: <AddProductComponent /> },
    { path: '/view-product', component: <ViewProduct /> },
    { path: '/product-list', component: <ProductList /> },
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