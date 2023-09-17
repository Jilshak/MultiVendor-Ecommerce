import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'





const initialState = {
    data: [],
    isLoading: true,
    msg: "It is in the initial state"
}

const BuyersSlice = createSlice({
    name: 'BuyersSlice',
    initialState,
    reducers: {

    },
    extraReducers: {
        
    }
})

export default BuyersSlice.reducer