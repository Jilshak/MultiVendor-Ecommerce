import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/Axios'


export const getCategories = createAsyncThunk('get_categories',
    async () => {
        try {
            const request = await api.get(`products/category/`)
            const response = request.data
            if (request.status == 200) {
                return response
            }
        } catch (error) {
            console.log("Error while getting the categories: ", error)
        }
    }
)

export const addCategory = createAsyncThunk('add_category',
    async (credentials) => {
        try {
            const requst = api.post(`products/category/`, credentials)
        } catch (error) {
            console.log("Error while creating category: ", error)
        }
    }
)

export const getProduct = createAsyncThunk('get_product',
    async (id) => {
        try {
            const request = await api.get(`products/products`)
            const response = request.data
            if (request.status == 200){
                const data = response.filter((item) => item.categories == id)
                return data
            }

        } catch (error) {
            console.log("Error: ", error)
        }
    }
)


const initialState = {
    isLoading: true,
    data: [],
    product: [],
    msg: 'Its still in the initial state'
}

const CategorySlice = createSlice({
    name: 'category_slice',
    initialState,
    reducers: {

    },
    extraReducers: {


        [getCategories.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getCategories.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.msg = "The state has been loaded"
        },
        [getCategories.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },


        [getProduct.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getProduct.fulfilled]: (state, action) => {
            state.isLoading = false
            state.product = action.payload
            state.msg = "The state has been loaded"
        },
        [getProduct.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },
    }
})

export default CategorySlice.reducer