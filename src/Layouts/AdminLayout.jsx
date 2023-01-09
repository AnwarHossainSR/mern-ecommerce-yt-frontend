import { Box, Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Admin/common/Sidebar';
import Dashboard from '../pages/admin/Dashboard/AdminDashboard';
import Products from '../pages/admin/Products';
import AdminProtected from '../pages/protected/AdminProtected';

const AdminLayout = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        width: '100%',
        background: '#151632',
        color: '#E0E0E0',
      }}
    >
      <Sidebar />
      <Stack
        sx={{
          width: '80%',
          height: 'auto',
          minHeight: '100vh',
        }}
        p={2}
      >
        <Routes>
          <Route path="/" element={<AdminProtected />}>
            <Route path="admin/">
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="products" element={<Products />} />
            </Route>
          </Route>
        </Routes>
      </Stack>
    </Box>
  );
};

export default AdminLayout;
