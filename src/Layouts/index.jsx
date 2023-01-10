import { Route, Routes } from 'react-router-dom';
import Footer from '../components/App/common/Footer/Footer';
import Header from '../components/App/common/Header/Header';
import NotFound from '../pages/404';
import Dashboard from '../pages/admin/Dashboard/AdminDashboard';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ResetPassword from '../pages/auth/ResetPassword';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Protected from '../pages/protected/Protected';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
        </Route>
        <Route path="/carts" element={<Protected />}>
          <Route index element={<Cart />} />
        </Route>
        <Route path="/" element={<Protected />}>
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
