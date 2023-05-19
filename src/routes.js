
import Dashboard from "views/Dashboard.js";
import TableList from "views/TableList.js";
import Login from "views/Login.js";
import basic_details from "views/basic_details";
const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin"
  },

  {
    path: "/user",
    name: "User ",
    icon: "nc-icon nc-circle-09",
    component: TableList,
    layout: "/admin"
  },

  {
    path: "/basic_details",
    name: " ",
    icon: "",
    component: basic_details,
    layout: "/admin"
  },

   {
    path: "/Login",
    name: "",
    icon: "",
    component: Login,
    layout: "/admin"
  },

 


 ];
export default dashboardRoutes;
