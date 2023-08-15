import LoginComponent from "../components/auth/auth.component";
import HomeComponent from "../components/home.component";

export const routes = [
    { path: '/', component: <HomeComponent /> },
    { path: '/login', component: <LoginComponent /> },
]