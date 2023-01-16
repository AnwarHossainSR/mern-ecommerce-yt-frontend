import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StateCard from '../../../components/Admin/Cards/StateCard';
import ChartArea from '../../../components/Admin/Charts/ChartArea';
import TransactionTable from '../../../components/Admin/Tables/TransactionTable';
import { stateInfo } from '../../../constants/Data';
import { getDashboardData } from '../../../redux/actions/ProductAction';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.products);
  //assign object to array
  const [statData, setStatData] = useState([
    dashboard.totalAmount,
    dashboard.totalUsers,
    dashboard.totalProducts,
    dashboard.totalOrders,
  ]);

  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
    }
  }, []);

  useEffect(() => {
    if (Object.keys(dashboard).length === 0) {
      dispatch(getDashboardData());
    }
    if (Object.keys(dashboard).length !== 0) {
      setStatData([
        dashboard.totalAmount,
        dashboard.totalUsers,
        dashboard.totalProducts,
        dashboard.totalOrders,
      ]);
    }
  }, [dashboard]);

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
        {statData &&
          stateInfo.map((item, index) => (
            <StateCard
              key={index}
              Icon={item.Icon}
              text={item.text}
              value={statData[index]}
            />
          ))}
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
        <ChartArea graphData={dashboard?.graphData} />
        <TransactionTable latestOrders={dashboard?.latestOrders} />
      </Stack>
    </Stack>
  );
};

export default Dashboard;
