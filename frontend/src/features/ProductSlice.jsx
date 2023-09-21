import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/Axios'
import Swal from 'sweetalert2'



export const selectedProduct = createAsyncThunk('get_selected_product',
    async (id) => {
        try {
            const request = await api.get(`products/products/`)
            const response = request.data
            if (request.status == 200) {
                const data = response.filter((item) => item.id == id)
                return data
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const getAllProducts = createAsyncThunk('get_all_products',
    async (id) => {
        try {
            const request = await api.get(`products/products/`)
            const response = request.data
            if (request.status == 200) {
                return response
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const createProduct = createAsyncThunk('create_products',
    async (credentials) => {
        try {
            const requst = await api.post(`products/products/`, credentials)
            if (requst.status == 201) {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'success',
                        title: 'Added!',
                        text: "Your Product has been Added!!",
                    }
                )
            } else {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'error',
                        title: 'Not Added!',
                        text: "Something went wrong while adding the product!",
                    }
                )
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)



const initialState = {
    isLoading: true,
    data: [],
    products: [],
    msg: 'its still in the intitial condition'
}


const ProductSlice = createSlice({
    name: 'product_slice',
    initialState,
    reducers: {

    },
    extraReducers: {


        [selectedProduct.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [selectedProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.msg = "The state has been loaded"
        },
        [selectedProduct.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },



        [getAllProducts.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getAllProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.products = action.payload
            state.msg = "The state has been loaded"
        },
        [getAllProducts.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },
    }
})

export default ProductSlice.reducer