import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const Protected = () => {
  const { isAuth } = useSelector((state) => state.users);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
