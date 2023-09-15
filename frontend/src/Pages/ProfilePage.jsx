import React from 'react'
import Navbar from '../Components/Navbar'

function ProfilePage() {
    return (
        <>
            <div className='sticky top-0 z-50'>
                <Navbar />
            </div>
            <div className="p-16 relative  bg-[#1D232A]">
                <div className="p-8  bg-[#171c22] mt-12">
                    <div className="">
                        <div className="relative ">
                            <div className="w-48 shadow-md shadow-[#c3c1c1] h-48  mx-auto rounded-full bg-[#3e4f5a] absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="mt-32 text-center  pb-12">
                        <h1 className="text-4xl font-medium text-[#6B7280]">Jessica Jones, <span className="font-light text-gray-500">27</span></h1>
                        <p className="font-light text-gray-600 mt-3">Bucharest, Romania</p>

                        <p className="mt-8 text-gray-500">Solution Manager - Creative Tim Officer</p>
                        <p className="mt-2 text-gray-500">University of Computer Science</p>
                        <button className="mt-5 btn w-[300px]  btn-neutral">Edit Profile</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default ProfilePage
