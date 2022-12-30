import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import SuspenseFallback from './components/SuspenseFallback';
import Layout from './Layouts';
import { AdminLayout } from './Layouts/AdminLayout';
import NotFound from './pages/404';

const App = () => {
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
