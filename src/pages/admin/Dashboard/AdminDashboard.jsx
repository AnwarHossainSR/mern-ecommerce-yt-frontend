import { Stack, Typography } from '@mui/material';
import StateCard from '../../../components/Admin/Cards/StateCard';
import ChartArea from '../../../components/Admin/Charts/ChartArea';

const Dashboard = () => {
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
      <Stack mt={5}>
        <ChartArea />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
