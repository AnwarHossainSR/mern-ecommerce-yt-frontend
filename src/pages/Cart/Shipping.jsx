// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Stack, TextField } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storShippingInfoAction } from '../../redux/actions/CartAction';
import { notify } from '../../utils/helper';

const Shipping = ({ setActiveStep }) => {
  const dispatch = useDispatch();
  const { shippingInfo, cartProducts } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  const handleShipping = () => {
    //check all required fields
    if (!shippingInfo?.address) return notify('Address is required', 'error');
    if (!shippingInfo?.city) return notify('City is required', 'error');
    if (!shippingInfo?.state) return notify('State is required', 'error');
    if (!shippingInfo?.country) return notify('Country is required', 'error');
    if (!shippingInfo?.pinCode) return notify('Pin Code is required', 'error');
    if (!shippingInfo?.phoneNo)
      return notify('Phone Number is required', 'error');

    if (
      shippingInfo?.phoneNo?.length < 11 ||
      shippingInfo?.phoneNo?.length > 11
    )
      return notify('Phone Number should be 11 digits', 'error');

    setActiveStep((prev) => prev + 1);
  };

  const handleChange = (e) => {
    dispatch(
      storShippingInfoAction({
        ...shippingInfo,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    if (cartProducts.length === 0) return navigate('/');
  }, [cartProducts]);

  return (
    <Stack px={20} py={5}>
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

        <Stack
          sx={{
            gap: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}
          py={3}
        >
          <Button variant="contained" color="secondary">
            Back
          </Button>
          <Button variant="contained" color="success" onClick={handleShipping}>
            Confirm Shipping Info
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Shipping;
