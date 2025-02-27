import { Routes, Route } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Pagenotfound from "./Pages/Pagenotfound";
import Header from "./components/Layout/Header.js";
import Register from "./Pages/Auth/Register.js";
import Login from "./Pages/Auth/Login.js";
import Dashboard from "./Pages/user/Dashboard.js";
import ForgotPassword from "./Pages/Auth/ForgotPassword.js";
import PrivateRoute from "./components/Routes/Private.js";
import AdminRoute from './components/Routes/AdminRoute';
import AdminDashboard from "./Pages/Admin/AdminDashboard.js";
import CreateProduct from "./Pages/Admin/CreateProduct.js";
import CreateCategory from './Pages/Admin/CreateCategory.js';
import Users from "./Pages/Admin/Users.js";
import Orders from "./Pages/user/Orders.js";
import Profile from "./Pages/user/Profile.js"; // ✅ Corrected Profile import
import Products from './Pages/Admin/Products';
import UpdateProducts from "./Pages/Admin/UpdateProducts.js";
import ProductDetails from "./Pages/ProductDetails.js";
import Categories from "./Pages/Categories.js";
import CategoryProduct from "./Pages/CategoryProduct.js";
import CartPage from "./Pages/CartPage.js";
import AdminOrders from "./Pages/Admin/AdminOrders.js";
import Search from "antd/es/transfer/search.js";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/category/:slug" element={<CategoryProduct />} />
        <Route path="/search" element={<Search />} />

        {/* Private User Routes */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user/profile" element={<Profile />} /> {/* Profile Route */}
          <Route path="user" element={<Dashboard />} />
          <Route path="user/orders" element={<Orders />} />
        </Route>

        {/* Private Admin Routes */}
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin" element={<AdminDashboard />} />
          <Route path="admin/create-category" element={<CreateCategory />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/update-product/:slug" element={<UpdateProducts />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/users" element={<Users />} />
          <Route path="admin/orders" element={<AdminOrders />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </div>
  );
}

export default App;
