import Dashboard from './views/BackEnd/Dashboard';
import UserManagement from './views/BackEnd/UserManagement';
import UserProfile from './views/BackEnd/UserProfile';

const adminRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
    }, {
        path: "/users",
        name: "Users",
        icon: "pe-7s-graph",
        component: UserManagement,
        layout: "/admin"
    }, {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile,
        layout: "/admin"
    }
];

const frontendRoutes = [];

export {adminRoutes, frontendRoutes}