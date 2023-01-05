import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import SuspenseFallback from './components/SuspenseFallback';
import Layout from './Layouts';
import { AdminLayout } from './Layouts/AdminLayout';
import NotFound from './pages/404';
import { getAuthUser } from './redux/actions/UserAction';

const App = () => {
  const { isAuth } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth && localStorage.getItem('token')) {
      dispatch(getAuthUser());
    }
  }, [isAuth]);

  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/admin" element={<AdminLayout />} />
        <Route path="/*" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
