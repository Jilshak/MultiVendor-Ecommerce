import React from 'react'
import Navbar1 from '../../Components/Admin/Navbar1'
import { Outlet } from 'react-router-dom'
import AdminRouteGuard from '../../utils/AdminRouteGuard'

function AdminHome() {
    return (
        <>
            <AdminRouteGuard>
                <div className='sticky top-0'>
                    <Navbar1 />
                </div>
                <div>
                    <Outlet />
                </div>
            </AdminRouteGuard>
        </>
    )
}

export default AdminHome
