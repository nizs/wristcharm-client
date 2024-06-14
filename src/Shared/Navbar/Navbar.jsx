import React from 'react';
import { Link } from 'react-router-dom';
import { LiaShoppingBagSolid } from "react-icons/lia";

const Navbar = () => {

    const menuitem = <>
        <Link className='text-[17px] font-semibold' to='home'><li><a>Home</a></li></Link>
        <Link className='text-[17px] font-semibold' to='shop'><li><a>Shop</a></li></Link>
        <Link className='text-[17px] font-semibold' to='categories'><li><a>Categories</a></li></Link>
        <Link className='text-[17px] font-semibold' to='blogs'><li><a>Blogs</a></li></Link>
        <Link className='text-[17px] font-semibold' to='contact'><li><a>Contact</a></li></Link>
    </>

    return (
        <div className="navbar bg-base-100 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {menuitem}
                    </ul>
                </div>
                <Link to='/' className="md:text-3xl">WristCharm</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {menuitem}
                </ul>
            </div>
            <div className="navbar-end">
                {/* cart */}
                <Link to=''>
                    <div className="mr-6">
                        <div className="relative py-2">
                            <div className="t-0 absolute left-3">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">0</p>
                            </div>
                            <LiaShoppingBagSolid className='mt-4 h-6 w-6' />
                        </div>
                    </div>
                </Link>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-sm w-52">
                        <li className='hover:bg-primary hover:text-white rounded-sm'>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li className='hover:bg-primary hover:text-white rounded-sm'><a>Settings</a></li>
                        <li className='hover:bg-primary hover:text-white rounded-sm'><a>Logout</a></li>
                    </ul>
                </div>
                <Link className="ml-2 btn text-white bg-primary border-0 rounded-sm hover:bg-primary-light">
                    Login
                </Link>
            </div>
        </div>
    );
};

export default Navbar;