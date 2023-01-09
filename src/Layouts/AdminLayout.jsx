import { Box, Stack } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Admin/common/Sidebar';
import Dashboard from '../pages/admin/Dashboard/AdminDashboard';
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
        gap: '1rem',
        background: '#151632',
        color: '#E0E0E0',
      }}
    >
      <Sidebar />
      <Stack
        sx={{
          width: '70%',
          height: 'auto',
          minHeight: '100vh',
          marginLeft: '20%',
          padding: '1rem',
        }}
      >
        <Routes>
          <Route path="/" element={<AdminProtected />}>
            <Route path="admin/">
              <Route path="dashboard" element={<Dashboard />} />
            </Route>
          </Route>
        </Routes>
      </Stack>
    </Box>
  );
};

export default AdminLayout;
