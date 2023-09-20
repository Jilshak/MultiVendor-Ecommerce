import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../features/UserSlice'
import CategorySlice from '../features/CategorySlice'

export const store = configureStore({
    reducer: {
        users: UserSlice,
        categories: CategorySlice,
    }
})