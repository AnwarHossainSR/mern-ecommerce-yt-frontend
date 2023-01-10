import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect } from 'react';
import StateCard from '../../../components/Admin/Cards/StateCard';
import ChartArea from '../../../components/Admin/Charts/ChartArea';
import TransactionTable from '../../../components/Admin/Tables/TransactionTable';

const Dashboard = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
    }
  }, []);

  return (
    <Stack
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
      gap={2}
    >
      <Typography variant="h5">Dashboard</Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          gap: '15px',
        }}
      >
        <StateCard />
        <StateCard />
        <StateCard />
        <StateCard />
      </Stack>
      <Stack
        mt={5}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <ChartArea />
        <TransactionTable />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
