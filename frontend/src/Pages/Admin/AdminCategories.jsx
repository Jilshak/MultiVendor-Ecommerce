import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCategory, getCategories, getProduct } from '../../features/CategorySlice'
import Swal from 'sweetalert2'
import Rating from '../../Components/Rating'

function AdminCategories() {

    const dispatch = useDispatch()
    const category = useSelector((state) => state.categories)

    const [items, setItems] = useState()

    useEffect(() => {
        dispatch(getCategories())
    }, [])

    useEffect(() => {
        if (category.data && category?.data.length > 0) {
            setItems(category?.data)
            console.log("This is the items: ", items)
        }
    }, [category.data, dispatch])

    const [toggle, setToggle] = useState(false)
    const showProducts = async (id) => {

        console.log("This is the category id: ", id)
        await setToggle(toggle ? false : true)
        await dispatch(getProduct(id))
    }

    const [categoryName, setCategoryName] = useState('')

    const handleAddCategory = async () => {
        let data = {
            category: categoryName
        }

        if (!categoryName) {
            Swal.fire(
                {
                    background: '#191C24',
                    icon: 'error',
                    title: 'Category field empty!!',
                    text: "Enter something into the category field before creating one!!",
                }
            );
            return;
        }
        await dispatch(addCategory(data));
        setCategoryName('');
        setTimeout(() => {
            dispatch(getCategories());
        }, 100);
    }


    return (
        <div className='grid lg:grid-cols-2 relative'>
            <div className='bg-[#15191E] rounded-2xl min-h-[450px] lg:max-w-[400px] mx-10 relative top-14 lg:left-28'>
                <div className='flex items-center justify-center'>
                    <h1 className='text-2xl font-semibold m-4'>Categories</h1>
                </div>
                {
                    category.data && !category?.isLoading && category?.data.length >= 0 ?
                        <>
                            {
                                <div className='overflow-y-auto relative bottom-3 max-h-[330px]'>
                                    <ul className='text-lg'>
                                        {
                                            items?.map((item) => {
                                                return (
                                                    <li key={item.id} onClick={() => showProducts(item.id)} className=' p-2 mx-6 bg-[#1C2128] my-2 rounded-md hover:bg-[#2B3039]'>{item.category}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            }
                        </> : null
                }
                <div className='flex justify-center w-full items-center absolute bottom-5 '>
                    <button className="btn w-3/4 btn-md btn-outline bg-[#1C2128] " onClick={() => document.getElementById('my_modal_3').showModal()}>ADD CATEGORY</button>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <div className='flex justify-center'>
                                <h3 className="font-bold text-lg">ADD CATEGORY NAME</h3>
                            </div>
                            <div className='my-5 flex justify-center items-center'>
                                <input onChange={(e) => setCategoryName(e.target.value)} value={categoryName} type="text" placeholder="CATEGORY NAME" className="input input-bordered w-full max-w-sm" />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button onClick={handleAddCategory} className="btn w-2/4 btn-outline btn-success">ADD</button>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
            {
                toggle ?
                    <>
                        <div className='bg-[#15191E] grid grid-cols-3 grid-rows-4 min-h-[450px] mx-10 relative top-14 lg:right-36 overflow-y-auto'>
                            {
                                category?.product.map((item) => {
                                    return (
                                        <div key={item.id} className="card my-3 mx-auto relative w-52 h-[100px] bg-base-100 shadow-xl image-full hover:shadow-[#bfbbbb] hover:scale-105 hover:shadow-md">
                                            <figure>
                                                <img className='w-full' src={`https://source.unsplash.com/vpOeXr5wmR4/`} alt="Shoes" />
                                            </figure>
                                            <div className="card-body relative h-[80px] flex-row justify-center object-contain">
                                                <h2 className="card-title absolute top-2  flex items-center justify-center">{item.title}</h2>
                                                <div>
                                                    <h2 className="flex items-center justify-center mt-3"><Rating /></h2>
                                                    <h2 className="flex items-center justify-center text-xs">Sold By: {item.seller_details.username}</h2>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </> : null
            }

        </div>
    )
}

export default AdminCategories
