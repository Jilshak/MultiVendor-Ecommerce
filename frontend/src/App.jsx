import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import ProtectedRoutes from './utils/ProtectedRoutes'
import CategoriesPage from './Pages/CategoriesPage'
import ProductPage from './Pages/ProductPage'
import CartPage from './Pages/CartPage'
import WishlistPage from './Pages/WishlistPage'
import ProfilePage from './Pages/ProfilePage'
import CheckoutPage from './Pages/CheckoutPage'
import OrderHistory from './Pages/OrderHistory'




function App() {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/product/:id?' element={<ProductPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/wishlist' element={<WishlistPage />} />
        <Route path='/checkout' element={<CheckoutPage />} />
        <Route path='/orders' element={<OrderHistory />} />
      </Route>
    </Routes>
  )
}

export default App
