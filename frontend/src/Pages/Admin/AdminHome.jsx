import React from 'react'
import Navbar1 from '../../Components/Admin/Navbar1'
import { Outlet } from 'react-router-dom'

function AdminHome() {
    return (
        <>
            <div className='sticky top-0'>
                <Navbar1 />
            </div>
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default AdminHome
