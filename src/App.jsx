import { CircularProgress, Stack } from '@mui/material';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import SuspenseFallback from './components/SuspenseFallback';
import Layout from './Layouts';
import AdminLayout from './Layouts/AdminLayout';
import NotFound from './pages/404';
import Dashboard from './pages/Dashboard';
import { getAuthUser } from './redux/actions/UserAction';

const App = () => {
  const { pathname } = useLocation();
  const { isAuth, isLoading } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!isAuth && localStorage.getItem('token')) {
      dispatch(getAuthUser());
    }
  }, [isAuth]);

  if (isLoading)
    return (
      <Stack
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Stack>
    );

  if (pathname.startsWith('/admin')) return <AdminLayout />;
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/*" element={<Layout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default App;
