import React from 'react'
import Navbar from '../Components/Navbar'
import Categories from '../Components/Categories'
import rightarrow from '../icons/rightarrow.png'
import { Link } from 'react-router-dom'
import Carousal from '../Components/Carousal'
import Card from '../Components/Card'
import Featured from '../Components/Featured'

function HomePage() {
  return (
    <div className='bg-[#1D232A] h-screen'>
      <div className='sticky top-0 z-50'>
        <Navbar />
      </div>
      <div>
        <Carousal />
      </div>
      <div className='mb-10'>
        <div className='mx-[50px]'>
          <div className='flex items-center lg:justify-start md:justify-start sm:justify-center xs:justify-center  text-3xl mt-5 bg-[#1A1F25] rounded-t-2xl'>
            <p className='font-semibold relative lg:left-10'>Categories</p>
            <br /><br />
          </div>
          <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:gird-cols-2 xs:grid-cols-1 lg:items-start xs:items-center justify-center w-full min-h-[400px] bg-[#1A1F25] rounded-b-2xl '>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className=' flex justify-center items-center my-3 mx-3'>
              <Categories />
            </div>
            <div className='flex justify-center items-center relative  top-5'>
              <Link to='categories'>
                <div className='hover:bg-[#383F47] h-20 w-20 flex items-center justify-center rounded-full'>
                  <img className='h-10' src={rightarrow} alt="" />
                </div>
              </Link>
              <p className='mx-1'>View more...</p>
            </div>
          </div>
        </div>
        <div className='mx-[50px] min-h-[300px] bg-[#1A1F25] my-8'>
          <p className='text-3xl font-semibold left-14 top-5 relative'>Featured Products</p>
          <div className='mx-[50px] min-h-[300px]  bg-[#1A1F25] my-8'>
            <div className="carousel relative top-12 carousel-center bg-[#1A1F25] overflow-x-auto rounded-box" style={{ maxWidth: '100%' }}>
              <div className="carousel-item me-5">
                <Featured />
              </div>
              <div className="carousel-item me-5">
                <Featured />
              </div>
              <div className="carousel-item me-5">
                <Featured />
              </div>
              <div className="carousel-item me-5">
                <Featured />
              </div>
              <div className="carousel-item me-5">
                <Featured />
              </div>
              <div className="carousel-item me-5">
                <Featured />
              </div>
              
            </div>
          </div>

        </div>

      </div>
      <br />
    </div>
  )
}

export default HomePage
