import React from 'react'
import Navbar from '../Components/Navbar'
import { Link } from 'react-router-dom'
function CartPage() {
    return (
        <div>
            <div className='sticky top-0'>
                <Navbar />
            </div>
            <div class="h-screen  pt-20">
                <h1 class="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div class="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div class="rounded-lg md:w-2/3">

                        <div class="justify-between mb-6 rounded-lg  p-6 shadow-md shadow-[#cecccc] sm:flex sm:justify-start">
                            <img src={`https://source.unsplash.com/vpOeXr5wmR4/`} alt="product-image" class="w-full max-h-[110px] rounded-lg sm:w-40" />
                            <div class="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                <div class="mt-5 sm:mt-0">
                                    <h2 class="text-lg font-bold text-[#A6ADBA]">Product Title</h2>
                                    <p class="mt-1 text-xs text-[#A6ADBA]">Product brand</p>
                                </div>
                                <div class="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                    <div class="flex items-center border-gray-100">
                                        <span class="cursor-pointer  btn-outline btn-error rounded-l  py-1 px-3.5 duration-100"> - </span>
                                        <p className='text-[#A6ADBA] mx-1'>1</p>
                                        <span class="cursor-pointer btn-outline btn-success rounded-r  py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                    </div>
                                    <div class="flex items-center space-x-4">
                                        <p class="text-sm font-bold">$ 9999</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="mt-6 h-full rounded-lg border  p-6 shadow-md md:mt-0 md:w-1/3">
                        <div class="mb-2 flex justify-between">
                            <p class="text-[#A6ADBA]">Subtotal</p>
                            <p class="text-[#A6ADBA]">$9999</p>
                        </div>
                        <div class="flex justify-between">
                            <p class="text-[#A6ADBA]">Shipping</p>
                            <p class="text-[#A6ADBA]">$ 9999+54</p>
                        </div>
                        <hr class="my-4" />
                        <div class="flex justify-between">
                            <p class="text-lg font-bold">Total</p>
                            <div class="">
                                <p class="mb-1 text-lg font-bold">874239</p>
                                <p class="text-sm text-[#A6ADBA]">including VAT</p>
                            </div>
                        </div>
                        <Link to='/checkout'>
                            <button className="mt-6 w-full btn btn-neutral">Check out</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartPage
