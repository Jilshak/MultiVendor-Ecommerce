import React, { useState } from 'react'
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
    const [role, setRole] = useState('')
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
        } else {
            const credentials = {
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                role: role
            }
            dispatch(Register(credentials))
            navigate('/login')
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse min-w-[650px]">
                <div className="card flex-shrink-0 w-full max-w-md  hover:shadow-md hover:shadow-[#e5e4e4] shadow-[#e5e4e4] bg-base-100">
                    <div className="card-body">
                        <div className="form-control mb-2">
                            <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" className="input input-bordered" />
                        </div>
                        <div className='flex'>
                            <div className="form-control mb-2 me-2">
                                <input onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="first name (optional)" className="input input-bordered  w-full max-w-lg" />
                            </div>
                            <div className="form-control mb-2">
                                <input onChange={(e) => setLastName(e.target.value)} type="text" placeholder="last name (optional)" className="input input-bordered  w-full max-w-xs" />
                            </div>
                        </div>
                        <div>
                            <select onChange={(e) => setRole(e.target.value)} className="select select-bordered w-full max-w-sm">
                                <option disabled selected>Role</option>
                                <option value='1'>Buyer</option>
                                <option value='2'>Vendor</option>
                                <option value='3'>Re-Seller</option>
                                <option value='4'>Is All</option>
                            </select>
                        </div>
                        <div className="form-control mb-2">
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mb-3">
                            <input onChange={(e) => setPassword1(e.target.value)} type="password" placeholder="confirm password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <button onClick={handleSubmit} className="btn btn-outline">SignUp</button>
                        </div>

                        <span className='flex justify-center '>
                            <label className="label ">
                                <span className="label-text-alt flex text-sm">Already have an Account? <Link to='/login'> <p className='ms-2 link link-hover link-accent'>Login</p> </Link> </span>
                            </label>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpPage
