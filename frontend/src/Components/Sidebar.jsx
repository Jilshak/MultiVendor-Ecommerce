import React from 'react'
import hamburger from '../icons/hamburger.png'

function Sidebar() {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col  ">
                <h1>Hello world!!</h1>
                <label htmlFor="my-drawer-2" className='btn btn-sm absolute left-0 mx-4 top-3 drawer-button lg:hidden' >
                    <img  className='h-5' src={hamburger} alt="" />
                </label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>

            </div>
        </div>
    )
}

export default Sidebar
