import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getBuyers, getResellers, getSellers, getUsers } from '../../features/UserSlice'

function Dashboard() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)


    useEffect(() => {
        dispatch(getUsers())
        dispatch(getBuyers())
        dispatch(getSellers())
        dispatch(getResellers())
    }, [users.users])


    return (
        <>
            {
                !users.isLoading ?
                    <>
                        <div className='flex justify-center my-5'>
                            <div className="stats  shadow-md shadow-[#d2d0d0]">

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

                            </div>
                        </div>
                        <div className='grid grid-cols-2 h-2/3 w-2/3 bg-[#15191E] mx-auto'>
                            <h1>Hello world</h1>
                        </div>
                    </> : null
            }
        </>
    )
}

export default Dashboard
