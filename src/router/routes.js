import LoginComponent from "../components/auth/auth";
import HomeComponent from "../components/home";

export const routes = [
    { path: '/', component: <HomeComponent /> },
    { path: '/login', component: <LoginComponent /> },
]