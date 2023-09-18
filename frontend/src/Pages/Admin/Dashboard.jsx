import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBlockedUsers, getBuyers, getResellers, getSellers, getUsers } from '../../features/UserSlice'

function Dashboard() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(getUsers())
        dispatch(getBuyers())
        dispatch(getSellers())
        dispatch(getResellers())
        dispatch(getBlockedUsers())
    }, [users.users])


    return (
        <>
            {
                !users.isLoading ?
                    <>
                        <div className='grid lg:grid-flow-col justify-around my-10'>
                            <div className="stats lg:mb-0 xs:mb-6 shadow-md shadow-[#d2d0d0]">

                                <div className="stat place-items-center">
                                    <div className="stat-title">Total Users</div>
                                    <div className="stat-value">{users.users}</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Buyers</div>
                                    <div className="stat-value text-secondary">{users.buyers.length}</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Vendors</div>
                                    <div className="stat-value">{users.sellers.length}</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Resellers</div>
                                    <div className="stat-value">{users.resellers.length}</div>
                                </div>
                                
                                <div className="stat place-items-center">
                                    <div className="stat-title">Blocked Users</div>
                                    <div className="stat-value">{users.blocked.length}</div>
                                </div>

                            </div>
                            
                            <div className="stats lg:mb-0 xs:mb-6 shadow-md shadow-[#d2d0d0]">

                                <div className="stat place-items-center">
                                    <div className="stat-title">Total Categories</div>
                                    <div className="stat-value">{users.users}</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Products</div>
                                    <div className="stat-value text-secondary">{users.buyers.length}</div>
                                </div>

                                <div className="stat place-items-center">
                                    <div className="stat-title">Products Out Of Stock</div>
                                    <div className="stat-value">{users.sellers.length}</div>
                                </div>

                            </div>
                        </div>
                        {/* <div className='grid grid-cols-2 h-2/3 w-2/3 bg-[#1d2127] mx-auto'>
                            <div className='flex justify-start mx-5 text-2xl font-semibold my-5'>
                                <h1>Products</h1>
                                <div>

                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <h1>Hello world</h1>
                            </div>

                        </div> */}
                    </> : null
            }
        </>
    )
}

export default Dashboard
