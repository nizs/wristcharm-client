import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Main = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login');
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Main;