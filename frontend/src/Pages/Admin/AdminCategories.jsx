import React, { useState } from 'react'

function AdminCategories() {

    const [toggle, setToggle] = useState(false)

    return (
        <div className='grid lg:grid-cols-2 '>
            <div className='bg-[#15191E] rounded-2xl min-h-[450px] lg:max-w-[300px] mx-10 relative top-14 lg:left-28'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-2xl font-semibold m-4'>Categories</h1>
                </div>
                <div className='mt-5'>
                    <ul className='text-lg'>
                        <li onClick={(e) => setToggle(toggle ? false : true)} className=' p-2 mx-6 bg-[#464a5d] my-2 rounded-md hover:bg-[#2B3039]'>Men</li>
                        <li className=' p-2 mx-6 bg-[#464a5d] my-2 rounded-md hover:bg-[#2B3039]'>Women</li>
                        <li className=' p-2 mx-6 bg-[#464a5d] my-2 rounded-md hover:bg-[#2B3039]'>Children</li>
                    </ul>
                </div>

            </div>
            {
                toggle ?
                    <>
                        <div className='bg-[#15191E] min-h-[450px] mx-10 relative top-14 lg:right-36'>
                            <h1>Here all the products of that categories newest to the oldest</h1>
                        </div>
                    </> : null
            }
        </div>
    )
}

export default AdminCategories
