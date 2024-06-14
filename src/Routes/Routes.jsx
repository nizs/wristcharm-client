import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blog/Blogs";
import Contact from "../pages/Contact/Contact";
import CategoryProducts from "../pages/Home/Category/CategoryProducts";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import Products from "../pages/Shop/Products/Products";
import WcCategorys from "../pages/WcCategory/WcCategorys";

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
                loader:({params}) => fetch(`http://localhost:5000/categories/${params.category}`)
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
    }
])

export default router;