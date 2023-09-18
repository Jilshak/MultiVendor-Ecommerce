import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import noprofile from '../../icons/noprofile.png'
import { BlockUser, UnblockUser, blockReseller, unblockReseller } from '../../features/UserSlice'
import { getResellers } from '../../features/UserSlice'

function AdminResellers() {
    const dispatch = useDispatch()
    const customer = useSelector((state) => state.users)

    const [reseller, setReseller] = useState([])
    const [userdetails, setUserDetails] = useState()

    const [selected, setSelected] = useState(false)

    useEffect(() => {
        dispatch(getResellers())
    }, [])

    const handleBlock = async (id) => {
        await dispatch(blockReseller({ userId: id }));
        await dispatch(BlockUser(id))
        setSelected(false)
    }

    const handleUnblock = async (id) => {
        await dispatch(unblockReseller({ userId: id }));
        await dispatch(UnblockUser(id))
        setSelected(false)
    }

    useEffect(() => {
        if (customer.resellers.length >= 1) {
            setReseller(customer.resellers)
        }
    }, [customer.resellers])

    const handleUser = async (id) => {
        Promise.resolve(setUserDetails(reseller.filter((item) => item.id == id)))
        console.log(userdetails)
        setSelected(true)
        return
    }

    //search functionality
    const [find, setFind] = useState()
    const searchItem = async (e) => {
        if (!find) {
            setFind(reseller)
        }
        if (e.target.value === '') {
            setReseller(find)
        } else {
            setReseller(await reseller.filter((item) => {
                return item.username.startsWith(e.target.value)
            }))
        }
    }



    return (
        <>
            {
                !customer.isLoading && customer.resellers.length >= 1 ?
                    <>
                        <div className='grid lg:grid-cols-2 xs:grid-cols-1 gap-0 items-center justify-center'>
                            <div className='bg-[#15191E] object-contain min-h-[150px] max-w-[450px] relative top-24 lg:left-36 rounded-2xl mx-10'>
                                <div className='relative mx-10 mt-5'>
                                    <input onChange={searchItem} type="text" placeholder="Search..." className="input input-sm input-bordered  w-full relative" />
                                </div>
                                <div className='max-h-[70vh] overflow-y-auto'>
                                    {
                                        reseller && reseller.length >= 1 ?
                                            <>
                                                <ul className='mx-10 mt-3 '>
                                                    {
                                                        reseller.map((item) => {
                                                            if (!item.is_blocked) {
                                                                return (
                                                                    <li key={item.id} onClick={(e) => {
                                                                        handleUser(item.id)
                                                                    }} className='flex cursor-pointer items-center p-1 my-5 rounded-lg hover:bg-[#2B3039]'>
                                                                        <img className='h-12 ms-2' src={item.profile_image ? item.profile_image : noprofile} alt="" />
                                                                        <h1 className='ms-2'>{item.username}</h1>
                                                                        <h1 className='text-sm text-green-400 absolute right-10 me-2'>Active</h1>
                                                                    </li>
                                                                )
                                                            } else {
                                                                return (
                                                                    <li key={item.id} onClick={(e) => {
                                                                        handleUser(item.id)
                                                                    }} className='flex cursor-pointer items-center p-1 my-5 rounded-lg hover:bg-[#2B3039]'>
                                                                        <img className='h-12 ms-2' src={item.profile_image ? item.profile_image : noprofile} alt="" />
                                                                        <h1 className='ms-2'>{item.username}</h1>
                                                                        <h1 className='text-sm text-orange-400 absolute right-10 me-2'>Blocked</h1>
                                                                    </li>
                                                                )
                                                            }
                                                        })
                                                    }
                                                </ul>
                                            </> : <p>Nothing is there to load</p>
                                    }
                                </div>
                            </div>
                            <div className={selected ? `bg-[#15191E] object-contain min-h-[150px] lg:mt-0 xs:mt-32 relative lg:min-w-[650px] rounded-2xl mx-10 top-24` : `hidden`}>
                                <div className='flex items-center justify-end'>
                                    <button onClick={(e) => setSelected(false)} className="btn btn-xs me-5 mt-3 btn-circle btn-outline">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>
                                </div>
                                {
                                    userdetails ?
                                        <>
                                            <div className=" relative  bg-[#15191E] rounded-2xl">
                                                <div className="p-1  bg-[#15191E] rounded-2xl">
                                                    <div className="rounded-2xl">
                                                        <div className="relative ">
                                                            <div className="w-48 shadow-md shadow-[#c3c1c1] h-48  mx-auto rounded-full bg-[#3e4f5a] absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-32 text-center pb-12">
                                                        <h1 className="text-4xl font-medium text-[#6B7280]">{userdetails[0]?.username}</h1>
                                                        <p className="font-light text-gray-600 mt-3">{userdetails[0].is_blocked ? `Blocked` : `active`}</p>

                                                        <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                                                        <p className="mt-2 text-gray-500">University of Computer Science</p>
                                                    </div>
                                                    <div className='grid grid-cols-2 relative top-0.5 rounded-b-2xl'>
                                                        {
                                                            !userdetails[0].is_blocked ?
                                                                <>
                                                                    <button onClick={(e) => handleBlock(userdetails[0].id)} className="btn rounded-none hover:btn-warning">Block</button>
                                                                </>
                                                                :
                                                                <button onClick={(e) => handleUnblock(userdetails[0].id)} className="btn rounded-none hover:btn-success">Unblock</button>
                                                        }
                                                        <button className="btn  hover:btn-error rounded-none">Delete</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                        : null
                                }
                            </div>
                        </div>
                    </> : null
            }
        </>
    )
}

export default AdminResellers
