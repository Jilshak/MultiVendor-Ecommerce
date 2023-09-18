import React, { useState } from 'react'

function AddProductPage() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState()
  const [additional, setAdditional] = useState({
    color: '',
    size: '',
  })

  return (
    <div className='h-screen '>
      <div className='grid lg:grid-cols-1 mx-10'>
        <div className='lg:h-[650px] lg:w-[800px] relative top-12 mx-auto rounded-xl bg-[#1A1F25]'>
          <div className='flex items-center lg:justify-start sm:justify-start xs:justify-center ms-7 text-2xl font-semibold mt-4 mb-2'>
            <p>Add Your Product</p>
          </div>
          <div className='grid grid-rows-2'>
            <div className='grid grid-cols-2 mx-5 mt-5'>
              <button type="button" className="flex bg-[#353c4f]  items-center justify-center rounded-md min-h-[120px]">
                <label htmlFor="product_image_1">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 1</p>
                  </span>
                  <input type="file" name='product_image_1' accept='application/msword,application/pdf' id='product_image_1' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
              <button type="button" className="flex bg-[#353c4f] mx-2 items-center justify-center rounded-md min-h-[120px]">
                <label htmlFor="product_image_2">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 2</p>
                  </span>
                  <input type="file" name='product_image_2' accept='application/msword,application/pdf' id='product_image_2' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
            </div>
            <div className='grid grid-cols-2  mx-5 mt-2 mb-4 '>
              <button type="button" className="flex bg-[#353c4f]  items-center justify-center rounded-md min-h-[120px]">
                <label htmlFor="product_image_3">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 3</p>
                  </span>
                  <input type="file" name='product_image_3' accept='application/msword,application/pdf' id='product_image_3' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
              <button type="button" className="flex bg-[#353c4f] mx-2 items-center justify-center rounded-md min-h-[120px]">
                <label htmlFor="product_image_4">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 4</p>
                  </span>
                  <input type="file" name='product_image_4' accept='application/msword,application/pdf' id='product_image_4' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
            </div>
          </div>
          <div className='mt-2 mx-5 mb-2 grid grid-cols-2 gap-5'>
            <div>
              <select className="select select-sm w-full max-w-xs mb-3">
                <option disabled selected>Select Category</option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
              <input type="text" placeholder="Product Title" className="input input-sm mb-3  w-full max-w-xs" />
              <input type="text" placeholder="Product Price" className="input input-sm mb-3  w-full max-w-xs" />
              <input type="text" placeholder="Product features sizes/colors/" className="input input-sm mb-3  w-full max-w-xs" />
              <input type="text" placeholder="Product Title" className="input input-sm mb-3  w-full max-w-xs" />
            </div>
            <textarea className="textarea" placeholder="Product Description"></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductPage
