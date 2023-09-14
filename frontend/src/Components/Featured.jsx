import React from 'react'
import Rating from './Rating'


function Featured() {
    return (
        <div className="card card-side w-[430px] bg-base-100 shadow-xl">
            <figure><img className='h-[200px]' src={`https://source.unsplash.com/vpOeXr5wmR4/600x600`} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">Product Name</h2>
                <div className='flex'>
                    <p className='text-lg  font-semibold line-through'>$299</p>
                    <p className='text-2xl relative right-7 bottom-1 font-semibold'>$199</p>
                </div>
                <div>
                    <Rating />
                </div>
                <div className="card-actions justify-start">
                    <button className="btn btn-sm btn-outline">ADD TO CART</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
