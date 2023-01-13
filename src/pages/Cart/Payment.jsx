import { Stack, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const Payment = () => {
  const { extraInfo } = useSelector((state) => state.carts);
  return (
    <Stack
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="h5">
        Total Amount : {extraInfo.totalPrice} $
      </Typography>
    </Stack>
  );
};

export default Payment;
