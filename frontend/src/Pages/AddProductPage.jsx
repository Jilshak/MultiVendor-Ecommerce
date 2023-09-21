import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../features/CategorySlice'

function AddProductPage() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [categories, setCategory] = useState()
  const [price, setPrice] = useState()
  const [deviceSpecification, setDeviceSpecification] = useState('')
  const [ram, setRam] = useState()
  const [rom, setRom] = useState()

  const dispatch = useDispatch()
  const category = useSelector((state) => state.categories)

  useEffect(() => {
    dispatch(getCategories())
  }, [])


  //also has to add the images to the credentials
  //then have to call this add products function.
  const addProducts = async () => {
    let credentials = {
      title: title,
      description: description,
      category: categories,
      price: price,
      ram: ram,
      rom: rom,
      additional: deviceSpecification
    }
    await dispatch()
  }

  return (
    <div className='h-screen '>
      <div className='sticky top-0'>
        <Navbar />
      </div>
      <div className='grid lg:grid-cols-1 mx-10'>
        <div className='lg:h-[600px] lg:w-[800px] relative top-10 mx-auto rounded-xl bg-[#1A1F25]'>
          <div className='flex items-center lg:justify-start sm:justify-start xs:justify-center ms-7 text-2xl font-semibold mt-4 mb-2'>
            <p>Add Your Product</p>
          </div>
          <div className='grid grid-rows-2'>
            <div className='grid grid-cols-2 mx-5 mt-5'>
              <button type="button" className="flex bg-[#353c4f]  items-center justify-center rounded-md min-h-[100px]">
                <label htmlFor="product_image_1">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 1</p>
                  </span>
                  <input type="file" name='product_image_1' accept='application/msword,application/pdf' id='product_image_1' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
              <button type="button" className="flex bg-[#353c4f] mx-2 items-center justify-center rounded-md min-h-[100px]">
                <label htmlFor="product_image_2">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 2</p>
                  </span>
                  <input type="file" name='product_image_2' accept='application/msword,application/pdf' id='product_image_2' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
            </div>
            <div className='grid grid-cols-2  mx-5 mt-2 mb-4 '>
              <button type="button" className="flex bg-[#353c4f]  items-center justify-center rounded-md min-h-[100px]">
                <label htmlFor="product_image_3">
                  <span className='cursor-pointer py-5 flex items-center justify-center px-10  text-lg '>
                    <p>Photo 3</p>
                  </span>
                  <input type="file" name='product_image_3' accept='application/msword,application/pdf' id='product_image_3' onChange={(e) => uploadFiles(e.target.files[0])} className='hidden' />
                </label>
              </button>
              <button type="button" className="flex bg-[#353c4f] mx-2 items-center justify-center rounded-md min-h-[100px]">
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
              <select onChange={(e) => setCategory(e.target.value)} className="select select-sm w-full max-w-xs mb-3">
                <option disabled selected>Select Category</option>
                {
                  category && category.data.length > 0 ?
                    <>
                      {
                        category.data.map((item) => {
                          return (
                            <option key={item.id} value={item.category}>{item.category}</option>
                          )
                        }, [])
                      }
                    </> : null
                }
              </select>
              <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Product Title" className="input input-sm mb-3  w-full max-w-xs" />
              <input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Product Price" className="input input-sm mb-3  w-full max-w-xs" />
              <input onChange={(e) => setDeviceSpecification(e.target.value)} type="text" placeholder="Device Specification" className="input input-sm mb-3  w-full max-w-xs" />
              <div className='flex items-center justify-center'>
                <select onChange={(e) => setRom(e.target.value)} className="select select-sm me-12 mb-3  w-full max-w-xs">
                  <option disabled selected>Select ROM</option>
                  <option defaultChecked value={1}>512 GB</option>
                  <option value={2}>1024 GB</option>
                </select>
                <select onChange={(e) => setRam(e.target.value)} className="select select-sm me-12 mb-3  w-full max-w-xs">
                  <option disabled selected>Select RAM</option>
                  <option defaultChecked value={1}>8 GB</option>
                  <option value={2}>16 GB</option>
                </select>
              </div>
            </div>
            <textarea onChange={(e) => setDescription(e.target.value)} className="textarea" placeholder="Product Description"></textarea>
          </div>
          <div className='flex items-center justify-center'>
            <button onClick={addProducts} className="btn btn-neutral w-1/3">ADD</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProductPage
