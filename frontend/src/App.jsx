import { Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';
import ProtectedRoutes from './utils/ProtectedRoutes';
import CategoriesPage from './Pages/CategoriesPage';
import ProductPage from './Pages/ProductPage';
import CartPage from './Pages/CartPage';
import WishlistPage from './Pages/WishlistPage';
import ProfilePage from './Pages/ProfilePage';
import CheckoutPage from './Pages/CheckoutPage';
import OrderHistory from './Pages/OrderHistory';
import jwtDecode from 'jwt-decode';
import Dashboard from './Pages/Admin/Dashboard';
import AdminProduct from './Pages/Admin/AdminProduct';
import AdminCategories from './Pages/Admin/AdminCategories';
import AdminCustomers from './Pages/Admin/AdminCustomers';
import AdminResellers from './Pages/Admin/AdminResellers';
import AdminVendors from './Pages/Admin/AdminVendors';
import AdminReport from './Pages/Admin/AdminReport';
import AdminOrders from './Pages/Admin/AdminOrders';
import AdminHome from './Pages/Admin/AdminHome';
import { useEffect, useState } from 'react';

function App() {
  const [validated, setValidated] = useState(null);

  useEffect(() => {
    const accessToken = async () => {
      try {
        const token = await localStorage.getItem('authToken');
        const access = await jwtDecode(token);
        await setValidated(access.is_superuser);
        console.log(access)
      } catch (error) {
        console.error('Error decoding token:', error);

        // Handle the error as needed, e.g., redirect to login
      }
    };

    accessToken();
  }, []);

  return (
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<SignUpPage />} />
      <Route element={<ProtectedRoutes validated={validated} />}>
        <>
          <Route path='/' element={<HomePage />} />
          <Route path='/categories' element={<CategoriesPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='/product/:id?' element={<ProductPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/wishlist' element={<WishlistPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/orders' element={<OrderHistory />} />

          <Route path='/admin/' element={<AdminHome />}>
            <Route index element={<Dashboard />} />
            <Route path='admin_categories' element={<AdminCategories />} />
            <Route path='admin_products' element={<AdminProduct />} />
            <Route path='admin_customers' element={<AdminCustomers />} />
            <Route path='admin_resellers' element={<AdminResellers />} />
            <Route path='admin_vendors' element={<AdminVendors />} />
            <Route path='admin_reports' element={<AdminReport />} />
            <Route path='admin_orders' element={<AdminOrders />} />
          </Route>
        </>
      </Route>
    </Routes>
  );
}

export default App;
