import React, { useState } from 'react'

function AdminCategories() {

    const [toggle, setToggle] = useState(false)
    const [showCategory, setShowCategory] = useState(false)

    return (
        <div className='grid lg:grid-cols-2 relative'>
            <div className='bg-[#15191E] rounded-2xl min-h-[450px] lg:max-w-[400px] mx-10 relative top-14 lg:left-28'>
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
                <div className='flex justify-center w-full items-center absolute bottom-5 '>
                    <button className="btn w-3/4 btn-md btn-outline " onClick={() => document.getElementById('my_modal_3').showModal()}>ADD CATEGORY</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='flex justify-center'>
                                <h3 className="font-bold text-lg">ADD CATEGORY NAME</h3>
                            </div>
                            <div className='my-5 flex justify-center items-center'>
                                <input type="text" placeholder="CATEGORY NAME" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className="btn w-2/4 btn-outline btn-success">ADD</button>
                            </div>
                        </div>
                    </dialog>
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
