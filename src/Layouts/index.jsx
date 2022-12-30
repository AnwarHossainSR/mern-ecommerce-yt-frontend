import { Route, Routes } from 'react-router-dom';
import Footer from '../components/App/common/Footer/Footer';
import Header from '../components/App/common/Header/Header';
import NotFound from '../pages/404';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Products from '../pages/Products';

const Layout = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />} />
        </Route>
        <Route path="/carts">
          <Route index element={<Cart />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Layout;
