import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import Blogs from "../pages/Blog/Blogs";
import Contact from "../pages/Contact/Contact";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import UserCart from "../pages/Dashboard/UserCart/UserCart";
import CategoryProducts from "../pages/Home/Category/CategoryProducts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Products from "../pages/Shop/Products/Products";
import WcCategorys from "../pages/WcCategory/WcCategorys";
import AuthProvider from "../Provider/AuthProvider";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'shop',
                element: <Products />
            },
            {
                path: 'categories',
                element: <WcCategorys />
            },
            {
                path: 'categories/:category',
                element: <CategoryProducts />,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.category}`)
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'contact',
                element: <Contact />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
        ]
    },
    {
        path: "dashboard",
        element: <AuthProvider> <Dashboard /></AuthProvider>,
        children: [

            // ----------------------
            // Admin only routes
            // ----------------------
            // {
            //     path: "adminhome",
            //     element: <AdminRoute><AdminHome /></AdminRoute>
            // },
            {
                path: "allusers",
                element: <AllUsers />
            },
            // {
            //     path: "additems",
            //     // element: <AdminRoute><AddItem /></AdminRoute>
            //     element: <AddItem />
            // },
            // {
            //     path: "updateitem/:id",
            //     // element: <AdminRoute><UpdateItem /></AdminRoute>,
            //     element: <UpdateItem />,
            //     loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            // },
            // {
            //     path: "manageitems",
            //     element: <AdminRoute><ManageItems /></AdminRoute>
            // },



            // ----------------------
            // regular User routes
            // ----------------------
            // {
            //     path: "userhome",
            //     element: <UserHome />
            // },
            {
                path: "carts",
                element: <UserCart />
            }
            // {
            //     path: "payment",
            //     element: <Payment />
            // },
            // {
            //     path: "paymenthistory",
            //     element: <PaymentHistory />
            // }

        ]
    }
])

export default router;


// Code_me_@03