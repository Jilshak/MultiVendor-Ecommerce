import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar1() {

    const navigate = useNavigate()

    const handleLogout = async () => {
        await localStorage.removeItem('authToken')
        await navigate('/login')
    }

    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link to='/admin/'><li><p>Dashboard</p></li></Link>
                        <Link to='/admin/admin_customers'><li><p>Customers</p></li></Link>
                        <Link to='/admin/admin_vendors'><li><p>Vendors</p></li></Link>
                        <Link to='/admin/admin_resellers'><li><p>Resellers</p></li></Link>
                        <Link to='/admin/admin_products'><li><p>Products</p></li></Link>
                        <Link to='/admin/admin_categories'><li><p>Categories</p></li></Link>
                        <Link to='/admin/admin_orders'><li><p>Orders</p></li></Link>
                        <Link to='/admin/admin_reports'><li><p>Report</p></li></Link>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">ADMIN</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                <Link to='/admin/'><li><p>Dashboard</p></li></Link>
                        <Link to='/admin/admin_customers'><li><p>Customers</p></li></Link>
                        <Link to='/admin/admin_vendors'><li><p>Vendors</p></li></Link>
                        <Link to='/admin/admin_resellers'><li><p>Resellers</p></li></Link>
                        <Link to='/admin/admin_products'><li><p>Products</p></li></Link>
                        <Link to='/admin/admin_categories'><li><p>Categories</p></li></Link>
                        <Link to='/admin/admin_orders'><li><p>Orders</p></li></Link>
                        <Link to='/admin/admin_reports'><li><p>Report</p></li></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <p onClick={handleLogout} className="btn">Logout</p>
            </div>
        </div>
    );
}

export default Navbar1;
