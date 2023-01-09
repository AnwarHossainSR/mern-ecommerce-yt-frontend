import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

const AdminProtected = () => {
  const navigate = useNavigate();
  const { isAuth, user } = useSelector((state) => state.users);
  return isAuth && user.role === 'admin' ? (
    <Outlet />
  ) : (
    <Navigate to="/login" replace state={{ from: navigate.location }} />
  ); // eslint-disable-line
};

export default AdminProtected;
