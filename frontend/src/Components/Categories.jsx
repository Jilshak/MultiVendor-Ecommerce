import React from 'react'

function Categories() {
    return (
        <div className="card w-80 h-[100px] bg-base-100 shadow-xl image-full hover:shadow-[#bfbbbb] hover:scale-105 hover:shadow-md">
            <figure>
                <img className='w-full' src={`https://source.unsplash.com/vpOeXr5wmR4/`} alt="Shoes" />
            </figure>
            <div className="card-body h-[100px] object-contain">
                <h2 className="card-title flex items-center justify-center">Shoes</h2>
            </div>
        </div>


    )
}

export default Categories
