import React from 'react'
import Navbar from '../Components/Navbar'
function WishlistPage() {
  return (
    <div>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <div className="h-full  pt-20">
        <h1 className="mb-10 text-center text-2xl font-bold">WISHLIST</h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">

            <div className="justify-between flex mb-6 rounded-lg  p-6 shadow-md shadow-[#cecccc] sm:flex sm:justify-start">
              <img src={`https://source.unsplash.com/vpOeXr5wmR4/`} alt="product-image" className="w-full max-h-[110px] rounded-lg sm:w-40 xs:w-40" />
              <div className="sm:ml-4">
                <div className="mt-5 sm:mt-0">
                  <h2 className="text-lg font-bold text-[#A6ADBA]">Product Title</h2>
                  <p className="mt-1 text-xs text-[#A6ADBA]">Product brand</p>
                  <p className="text-lg font-bold">$ 9999</p>
                </div>
                <div className="relative flex left-0 mt-2">
                  <button className="btn btn-xs btn-outline me-3">Add to Cart</button>
                  <button className="btn btn-outline btn-xs btn-error">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WishlistPage
