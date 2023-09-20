import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getSellerProducts } from '../features/SellersSlice'
import jwtDecode from 'jwt-decode'
function MyProductsPage() {

    const dispatch = useDispatch()
    const sellers = useSelector((state) => state.sellers)

    useEffect(() => {
        const getProducts = async () => {
            let token = await localStorage.getItem('authToken')
            let access = await jwtDecode(token)
            await dispatch(getSellerProducts(access.user_id))
        }
        getProducts()
    }, [])

    return (
        <div>
            <div className='sticky top-0'>
                <Navbar />
            </div>
            <div className="h-full  pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">MY PRODUCTS</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                        {
                            sellers && !sellers.isLoading ?
                                <>
                                    {
                                        sellers.data.map((item) => {
                                            return (
                                                <Link to='/myproducts_report_page'>
                                                    <div className="justify-between bg-[#1A1F25] flex mb-6 rounded-lg  p-6 shadow-md hover:shadow-[#cecccc] sm:flex sm:justify-start">
                                                        <img src={`https://source.unsplash.com/vpOeXr5wmR4/`} alt="product-image" className="w-full max-h-[110px] rounded-lg sm:w-40 xs:w-40" />
                                                        <div className="sm:ml-4">
                                                            <div className="mt-5 sm:mt-0">
                                                                <h2 className="text-lg font-bold text-[#A6ADBA]">{item.title}</h2>
                                                                <p className="mt-1 text-xs text-[#A6ADBA]">Product brand</p>
                                                                <p className="text-lg font-bold">$ {item.price}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </> : null
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProductsPage
