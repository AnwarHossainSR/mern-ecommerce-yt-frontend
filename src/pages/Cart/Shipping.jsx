// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Stack, TextField } from '@mui/material';
import { storShippingInfoAction } from '../../redux/actions/CartAction';

const Shipping = () => {
  const dispatch = useDispatch();
  const { shippingInfo } = useSelector((state) => state.carts);

  const handleChange = (e) => {
    dispatch(
      storShippingInfoAction({
        ...shippingInfo,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <>
      <Stack spacing={2}>
        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            margin="dense"
            name="address"
            label="address"
            fullWidth
            variant="standard"
            defaultValue={shippingInfo?.address ?? ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="city"
            label="city"
            fullWidth
            variant="standard"
            defaultValue={shippingInfo?.city ?? ''}
            onChange={handleChange}
          />
        </Stack>
        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            margin="dense"
            name="state"
            label="state"
            fullWidth
            variant="standard"
            defaultValue={shippingInfo?.state ?? ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="country"
            label="country"
            fullWidth
            variant="standard"
            defaultValue={shippingInfo?.country ?? ''}
            onChange={handleChange}
          />
        </Stack>

        <Stack direction="row" sx={{ gap: '3rem' }}>
          <TextField
            margin="dense"
            name="pinCode"
            label="pinCode"
            fullWidth
            variant="standard"
            type="number"
            defaultValue={shippingInfo?.pinCode ?? ''}
            onChange={handleChange}
          />
          <TextField
            margin="dense"
            name="phoneNo"
            label="phoneNo"
            fullWidth
            variant="standard"
            type="number"
            defaultValue={shippingInfo?.phoneNo ?? ''}
            onChange={handleChange}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default Shipping;
