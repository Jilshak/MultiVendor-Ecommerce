import React from 'react'
import noprofile from '../icons/noprofile.png'
import wishlist from '../icons/wishlist.png'
import { Link } from 'react-router-dom'

function Navbar() {

    let token = localStorage.getItem('authToken')


    return (
        <>
            <div className="navbar bg-base-100 shadow-xl">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                    <div className="gap-2 mx-5 flex">
                        <div className="form-control">
                            <input type="text" placeholder="Search" className="input input-bordered lg:min-w-[400px]" />
                        </div>
                    </div>
                </div>
                {
                    !token ?
                        <>
                            <Link to='/login'>
                                <button className="btn-md text-lg rounded-lg btn-ghost lg:block md:block sm:block xs:hidden">Login</button>
                            </Link>
                        </> : null
                }
                <div className="flex-none lg:block md:block sm:block xs:hidden">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className='text-lg'>
                                    Categories
                                </summary>
                                <ul className="p-2 bg-base-100">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="flex-none mx-5">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                <span className="badge badge-sm indicator-item">0</span>
                            </div>
                        </label>
                        <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                            <div className="card-body">
                                <span className="font-bold text-lg">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end lg:block xs:hidden">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-7 rounded-full">
                            <img className='h-5' src={wishlist} />
                        </div>
                    </label>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={noprofile} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        {
                            token ?
                                <>
                                    <li>
                                        <a className="justify-between">
                                            Profile
                                            <span className="badge">New</span>
                                        </a>
                                    </li>
                                </> : null
                        }
                        {
                            !token ?
                                <>
                                    <li className='lg:hidden md:hidden sm:hidden xs:block'>
                                        <span>
                                            Login
                                        </span>
                                    </li>
                                </> : null
                        }
                        {
                            token ?
                                <>
                                    <li><a>Settings</a></li>
                                </> : null
                        }
                        {
                            token ?
                                <>
                                    <li><a>Logout</a></li>
                                </> : null
                        }
                        {
                            !token ?
                                <>
                                    <li>
                                        <p className='text-orange-400'>You're not Logged In yet</p>
                                    </li>
                                </> : null
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar
