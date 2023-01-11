import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const Protected = () => {
  const { pathname } = useLocation();
  const { isAuth } = useSelector((state) => state.users);
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: pathname }} />
  );
};

export default Protected;
