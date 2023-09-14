import React, { useEffect, useState } from 'react'
import logo1 from '../Images/logo1.png'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Login } from '../features/UserSlice'

function LoginPage() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleGuestMode = async () => {
        await localStorage.setItem('guestToken', true)
        await navigate('/')
    }

    const handleLogin = async () => {
        let credential = {
            username: username,
            password: password
        }
        await dispatch(Login(credential))
        await navigate('/')
    }

    useEffect(() => {
        let token = localStorage.getItem('authToken')
        if (token) {
            navigate('/')
        }
    }, [])

    return (
        <div>
            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div className='flex items-center justify-center'>
                                <img className='w-[230px]' src={logo1} alt="" />
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input onChange={(e) => setUsername(e.target.value)} autocomplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Username" />
                                        <label for="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                    </div>
                                    <div className="relative">
                                        <input onChange={(e) => setPassword(e.target.value)} autocomplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" />
                                        <label for="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    <div>
                                        <div className="relative mt-5 flex items-center justify-center">
                                            <button onClick={handleLogin} className="bg-blue-500 hover:bg-blue-600 min-w-[350px] px-28 py-2 text-white rounded-md">LogIn</button>
                                        </div>
                                        <div className="relative mt-5 flex items-center justify-center">
                                            <button onClick={handleGuestMode} className="bg-blue-500 hover:bg-blue-600 min-w-[350px] px-28 py-2  text-white rounded-md">Guest Mode</button>
                                        </div>
                                        <div className='flex items-center justify-center'>
                                            <small className='my-3'>Don't have an account?
                                                <Link to='/register'>
                                                    <span className='text-blue-500'>Register</span>
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
    )
}

export default LoginPage
