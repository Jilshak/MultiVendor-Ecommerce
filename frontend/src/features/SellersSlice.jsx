import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/Axios'



export const getSellerProducts = createAsyncThunk('get_seller_products',
    async (id) => {
        try{
            const request = await api.get(`products/products/`)
            const response = request.data
            if (request.status == 200){
                const data = response.filter((item) => item.seller == id)
                return data
            }
        }catch(error){
            console.log("Error: ", error)
        }
    }
)

const initialState = {
    isLoading: true,
    data: [],
    msg: 'its still in the intitial condition'
}


const SellerSlice = createSlice({
    name: 'seller_slice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getSellerProducts.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getSellerProducts.fulfilled]: (state, action) => {
            state.isLoading = false
            state.data = action.payload
            state.msg = "The state has been loaded"
        },
        [getSellerProducts.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },
    }
})

export default SellerSlice.reducer