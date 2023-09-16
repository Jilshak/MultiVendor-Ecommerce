import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Login } from '../features/UserSlice'
import jwtDecode from 'jwt-decode'

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
        let token = await localStorage.getItem('authToken')
        let access = await jwtDecode(token)
        if (access.is_superuser) {
            await navigate('/admin/')
        } else {
            await navigate('/')
        }
    }

    useEffect(() => {
        const refresh = async () => {
            let token = await localStorage.getItem('authToken')
            let access = await jwtDecode(token)
            if (access.is_superuser) {
                await navigate('/admin/')
            } else {
                await navigate('/')
            }
        }
        refresh()
    }, [])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse min-w-[450px]">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" className="input input-bordered" />
                        </div>
                        <div className="form-control my-5">

                            <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="password" className="input input-bordered" />

                        </div>
                        <div className="form-control">
                            <button onClick={handleLogin} className="btn btn-outline">Login</button>
                        </div>
                        <div className="form-control mt-2">
                            <button onClick={handleGuestMode} className="btn btn-neutral">GuestMode</button>
                        </div>
                        <div className='flex items-center justify-center'>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover link-accent text-sm">Forgot password?</a>
                            </label>
                        </div>
                        <span className='flex justify-center '>
                            <label className="label ">
                                <span className="label-text-alt flex text-sm">Don't have an Account? <Link to='/register'> <p className='ms-2 link link-hover link-accent'>Register</p> </Link> </span>
                            </label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
