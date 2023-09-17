import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/Axios'
import Swal from 'sweetalert2'

export const Register = createAsyncThunk('register',
    async ({ username, password, firstname, lastname, role }) => {
        try {
            console.log("This is the role: ", role === '3')
            let credential = {
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname,
                is_seller: role === '2',
                is_reseller: role === '3',
                is_all: role === '4'

            }
            const request = await api.post(`user/`, credential)
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

//total no.of users in the website
export const getUsers = createAsyncThunk('get_usres',
    async () => {
        try {
            const request = await api.get(`user/`)
            const response = request.data.length
            if (request.status === 200) {
                return response
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const getBuyers = createAsyncThunk('get_buyers',
    async () => {
        try {
            const request = await api.get(`user/`)
            const response = request.data
            if (request.status === 200) {
                const data = response.filter((item) => item.is_buyer && !item.is_blocked && !item.is_superuser && !item.is_seller && !item.is_reseller && !item.is_all)
                return data
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const getSellers = createAsyncThunk('get_sellers',
    async () => {
        try {
            const request = await api.get(`user/`)
            const response = request.data
            if (request.status === 200) {
                const data = response.filter((item) => item.is_seller && item.is_buyer && !item.is_reseller && !item.is_all)
                return data
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const getResellers = createAsyncThunk('get_resellers',
    async () => {
        try {
            const request = await api.get(`user/`)
            const response = request.data
            if (request.status === 200) {
                const data = response.filter((item) => item.is_reseller && item.is_buyer && !item.is_seller && !item.is_all)
                return data
            }
        } catch (error) {
            console.log("Error: ", error)
        }
    }
)

export const getAll = createAsyncThunk('getAll',
    async () => {
        try {
            const request = await api.get(`user/`)
            const response = request.data
            if (request.status === 200) {
                const data = response.filter((item) => item.is_all && !item.is_buyer && !item.is_seller && !item.is_reseller)
                return data
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

export const DeleteUser = createAsyncThunk('delete_user',
    async (id) => {
        try {
            const request = await api.delete(`user/${id}/`)
            if (request.status == 200) {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'success',
                        title: 'Deleted!!',
                        text: "The User has been deleted Successfully!!",
                    }
                )
            }
        } catch (error) {
            console.log("Error while deleting: ", error)
        }
    }
)

export const BlockUser = createAsyncThunk('block_user',
    async (id) => {
        try {
            const request = await api.patch(`user/${id}/`, { is_blocked: true })
            if (request.status == 200) {
                await Swal.fire(
                    {
                        background: '#191C24',
                        icon: 'success',
                        title: 'Blocked!!',
                        text: "The User has been Blocked Successfully!!",
                    }
                )
            }
        } catch (error) {
            console.log("Error while blocking: ", error)
        }
    }
)

const initialState = {
    isLoading: true,
    data: [],
    users: 0,
    buyers: [],
    sellers: [],
    resellers: [],
    all: [],
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


        [getUsers.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getUsers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.users = action.payload
            state.msg = "The state has been loaded"
        },
        [getUsers.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },


        [getBuyers.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getBuyers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.buyers = action.payload
            state.msg = "The state has been loaded"
        },
        [getBuyers.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },


        [getSellers.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getSellers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.sellers = action.payload
            state.msg = "The state has been loaded"
        },
        [getSellers.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },


        [getResellers.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getResellers.fulfilled]: (state, action) => {
            state.isLoading = false
            state.resellers = action.payload
            state.msg = "The state has been loaded"
        },
        [getResellers.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },


        [getAll.pending]: (state) => {
            state.isLoading = true
            state.msg = "The state is still loading!!"
        },
        [getAll.fulfilled]: (state, action) => {
            state.isLoading = false
            state.all = action.payload
            state.msg = "The state has been loaded"
        },
        [getAll.rejected]: (state) => {
            state.isLoading = false
            state.msg = 'The loading of the state has been finished with some problem.'
        },
    },
})

export default UserSlice.reducer