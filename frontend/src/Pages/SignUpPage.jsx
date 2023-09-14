import React, { useState } from 'react'
import logo1 from '../Images/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { Register } from '../features/UserSlice'


function SignUpPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password1, setPassword1] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
        if (password != password1) {
            await Swal.fire(
                {
                    background: '#191C24',
                    icon: 'error',
                    title: 'Failed!!!!',
                    text: "Somthing happened while you were creating the account",
                }
            )
        }else{
            const credentials = {
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                email: email
            }
            dispatch(Register(credentials))
            navigate('/login')
        }
    }

    return (
        <div >
            <div>
                <div className="min-h-screen bg-gray-100 py-6 flex flex-col  justify-center sm:py-12">
                    <div className="relative py-3 min-w-[500px] sm:mx-auto">
                        <div
                            className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                        </div>
                        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                            <div className="max-w-md mx-auto">
                                <div className='flex items-center justify-center'>
                                    <img className='w-[220px]' src={logo1} alt="" />
                                </div>
                                <div className="divide-y divide-gray-200">
                                    <div className="py-8 text-base leading-6 space-y-2 text-gray-700 sm:text-lg sm:leading-7">
                                        <div className="relative">
                                            <input onChange={(e) => setUsername(e.target.value)} autocomplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="username address" />
                                            <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                        </div>
                                        <div className="relative">
                                            <input onChange={(e) => setFirstName(e.target.value)} autocomplete="off" id="firstname" name="firstname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter your firstname" />
                                            <label for="firstname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">First Name</label>
                                        </div>
                                        <div className="relative">
                                            <input onChange={(e) => setLastName(e.target.value)} autocomplete="off" id="lastname" name="lastname" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Enter your last name" />
                                            <label for="lastname" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Last Name</label>
                                        </div>
                                        <div className="relative">
                                            <input onChange={(e) => setPassword(e.target.value)} autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                        </div>
                                        <div className="relative">
                                            <input onChange={(e) => setPassword1(e.target.value)} autocomplete="off" id="password1" name="password1" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Confirm Password" />
                                            <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Confirm Password</label>
                                        </div>
                                        <div>
                                            <div className="relative mt-5 flex items-center justify-center">
                                                <button onClick={handleSubmit} className="bg-blue-500 hover:bg-blue-600 px-28 py-2 text-white rounded-md">Register</button>
                                            </div>
                                            <div className='flex items-center justify-center'>
                                                <small className='my-3'>Already have an account?
                                                    <Link to='/login'>
                                                        <span className='text-blue-500'>Login</span>
                                                    </Link>
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
