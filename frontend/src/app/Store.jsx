import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../features/UserSlice'
import CategorySlice from '../features/CategorySlice'
import SellersSlice from '../features/SellersSlice'
import ProductSlice from '../features/ProductSlice'

export const store = configureStore({
    reducer: {
        users: UserSlice,
        categories: CategorySlice,
        sellers: SellersSlice,
        products: ProductSlice,
    }
})