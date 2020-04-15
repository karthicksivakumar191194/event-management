import Dashboard from './views/BackEnd/Dashboard';
import MyProfile from './views/BackEnd/MyProfile';
import UserManagement from './views/BackEnd/UserManagement';
import EventList from './views/BackEnd/Event/List';
import EvenCreate from './views/BackEnd/Event/Create';
import EventEdit from './views/BackEnd/Event/Edit';
import EventCategoryManagement from './views/BackEnd/EventCategoryManagement';
import EventLocationManagement from './views/BackEnd/EventLocationManagement';
import Settings from './views/BackEnd/Settings';

const adminRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
    }, {
        path: "/profile",
        name: "My Profile",
        icon: "pe-7s-user",
        component: MyProfile,
        layout: "/admin"
    }, {
        path: "/users",
        name: "User Management",
        icon: "pe-7s-users",
        component: UserManagement,
        layout: "/admin"
    }, {
        path: "/events",
        name: "Event Management",
        icon: "pe-7s-news-paper",
        component: EventList,
        layout: "/admin"
    }, {
        path: "/event/create",
        name: "Event Management",
        icon: "",
        component: EvenCreate,
        layout: "/admin",
        invisible: true,
    }, {
        path: "/event/edit",
        name: "Event Management",
        icon: "",
        component: EventEdit,
        layout: "/admin",
        invisible: true,
    }, {
        path: "/event/categories",
        name: "Event Categories",
        icon: "pe-7s-note2",
        component: EventCategoryManagement,
        layout: "/admin"
    }, {
        path: "/event/locations",
        name: "Event Locations",
        icon: "pe-7s-map-marker",
        component: EventLocationManagement,
        layout: "/admin"
    }, {
        path: "/settings",
        name: "Settings",
        icon: "pe-7s-tools",
        component: Settings,
        layout: "/admin"
    }
];

const frontendRoutes = [];

export {adminRoutes, frontendRoutes}