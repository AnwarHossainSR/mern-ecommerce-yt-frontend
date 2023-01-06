import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Login from '../auth/Login';

const Protected = () => {
  const { isAuth } = useSelector((state) => state.users);
  return isAuth ? <Outlet /> : <Login />;
};

export default Protected;
