import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../pages/Blog/Blogs";
import Categorys from "../pages/Category/Categorys";
import Contact from "../pages/Contact/Contact";
import Home from "../pages/Home/Home/Home";
import Shop from "../pages/Shop/Shop";

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
                element: <Shop />
            },
            {
                path: 'categories',
                element: <Categorys />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    }
])

export default router;