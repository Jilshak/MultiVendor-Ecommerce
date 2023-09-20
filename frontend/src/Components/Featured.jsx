import React from 'react'
import Rating from './Rating'


function Featured(props) {
    const {productData} = props
    return (
        <div className="card card-side w-[450px] bg-base-100 shadow-lg hover:shadow-[#d5d4d4] cursor-pointer">
            <figure><img className='h-[200px]' src={`https://source.unsplash.com/vpOeXr5wmR4/600x600`} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title truncate">{productData.title}</h2>
                <div className='flex'>
                    <p className='text-lg  font-semibold line-through'>$299</p>
                    <p className='text-2xl relative right-7 bottom-1 font-semibold'>${productData.price}</p>
                </div>
                <div>
                    <Rating rating={productData.rating}/>
                </div>
                <div className="card-actions  flex">
                    <button className="btn btn-xs  btn-outline">ADD TO CART</button>
                    <button className="btn btn-xs btn-outline btn-success">BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Featured
