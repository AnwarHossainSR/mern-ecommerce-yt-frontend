import { Stack, Typography } from '@mui/material';

const PlaceOrder = () => {
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
      <Typography variant="h5">Order Summary</Typography>
      Pleas place your order to complete the purchase
    </Stack>
  );
};

export default PlaceOrder;
