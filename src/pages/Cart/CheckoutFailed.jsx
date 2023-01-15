import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CheckoutFailed = () => {
  const navigate = useNavigate();
  return (
    <Stack
      p={5}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
      }}
    >
      <Stack
        py={10}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
          width: '100%',
        }}
      >
        <h1 style={{ color: 'tomato' }}>Checkout Failed</h1>
        <p>Please order again and pay!</p>
        <Stack py={5}>
          <Button
            variant="contained"
            color="error"
            onClick={() => navigate('/carts')}
          >
            Back to Carts
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default CheckoutFailed;
