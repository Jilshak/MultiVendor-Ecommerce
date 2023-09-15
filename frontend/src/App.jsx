import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignUpPage from './Pages/SignUpPage'
import ProtectedRoutes from './utils/ProtectedRoutes'
import CategoriesPage from './Pages/CategoriesPage'
import ProductPage from './Pages/ProductPage'




function App() {

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path='/' element={<HomePage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        <Route path='/product' element={<ProductPage />} />
      </Route>
    </Routes>
  )
}

export default App
