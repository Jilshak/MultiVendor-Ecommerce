import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/Axios'
import Swal from 'sweetalert2'

export const Register = createAsyncThunk('register',
    async (credentials) => {
        try {
            const request = await api.post(`user/`, credentials)
            if (request.status == 201) {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'success',
                        title: 'Account Created!',
                        text: "Your account has been created!!",
                    }
                )
                console.log("The user has been created")
            } else {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'error',
                        title: 'Failed!!!!',
                        text: "Somthing happened while you were creating the account",
                    }
                )
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const Login = createAsyncThunk('login',
    async (credential) => {
        try {
            const request = await api.post(`token/`, credential)
            const response = request.data
            if (request.status == 200) {
                await localStorage.removeItem('guestToken')
                await localStorage.setItem('authToken', response.access)
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'success',
                        title: 'Login Successful!',
                        text: "Welcome!!",
                    }
                )
            } else {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'error',
                        title: 'Failed!!!!',
                        text: "Somthing happened while you were logging in to the account",
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
    msg: 'is still loading up!!!'
}


const UserSlice = createSlice({
    name: 'user_slice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [Register.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [Register.fulfilled]: (state) => {
            state.isLoading = false
            state.msg = "The state has been loaded"
        },
        [Register.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },
    },
})

export default UserSlice.reducer