import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AdminProtected = () => {
  const { pathname } = useLocation();
  const { isAuth, user } = useSelector((state) => state.users);
  return isAuth && user.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: pathname }} />
  ); 
};

export default AdminProtected;
