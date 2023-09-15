import React, { useState } from 'react'

function CheckoutPage() {

    const [next, setNext] = useState(1)

    const handleNext = () => {
        setNext(next + 1)
    }
    

    return (
        <div class="bg-[#1D232A]">
            <div class="py-12">
                <div class="max-w-md mx-auto bg-[#1A1F25] shadow-lg rounded-lg md:max-w-xl ">
                    <div class="md:flex ">
                        <div class="w-full p-4 px-5 py-5">
                            <ul className="steps flex items-center justify-center xs:step-primary">
                                <li className="text-xs w-[150px] step step-success">Billing Address</li>
                                <li className={`text-xs w-[150px] step ${next >= 2 ? `step-success` : null}`}>Payment Method</li>
                                <li className={`text-xs w-[150px] step ${next == 3 ? `step-success` : null}`}>Confirm Order</li>
                            </ul>
                            <br />
                            {
                                next == 1 ?
                                    <>
                                        <div className='mt-5'>
                                            <span>Customer Information</span>
                                            <div class="relative pb-5 mt-3"> <input type="text" placeholder="Email" className="input input-md input-bordered w-full " /></div>
                                            <span>Shipping Address</span>
                                            <div class="grid md:grid-cols-2 md:gap-2 mt-2">
                                                <input type="text" placeholder="First Name" className="input input-md input-bordered w-full " />
                                                <input type="text" placeholder="Last Name" className="input input-md input-bordered w-full " />
                                            </div>
                                            <input type="text" placeholder="Company (optional)" className="input input-md input-bordered w-full mt-2" />
                                            <input type="text" placeholder="Address" className="input input-md input-bordered w-full mt-2" />
                                            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="input input-md input-bordered w-full mt-2" />
                                            <div class="grid md:grid-cols-3 md:gap-2">
                                                <input type="text" placeholder="Zipcode" className="input input-md input-bordered w-full mt-2" />
                                                <input type="text" placeholder="City" className="input input-md input-bordered w-full mt-2" />
                                                <input type="text" placeholder="State" className="input input-md input-bordered w-full mt-2" />
                                            </div>
                                            <input type="text" placeholder="Country" className="input input-md input-bordered w-full mt-2" />
                                            <input type="text" placeholder="Phone Number" className="input input-md input-bordered w-full mt-2" />
                                        </div>
                                    </> : (
                                        next == 2 ? 
                                        <>
                                            <p>This is the payment method section</p>
                                        </> 
                                        :
                                        <>
                                            <p>This is the confimation section!!!</p>
                                        </>
                                    )
                           }
                            <div class="flex justify-between items-center pt-2 mt-3">
                                <button onClick={(e) => setNext(next - 1)} className="btn btn-sm  btn-neutral">Go Back</button>
                                <button onClick={(e) => handleNext()} className="btn btn-sm  btn-neutral">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutPage
