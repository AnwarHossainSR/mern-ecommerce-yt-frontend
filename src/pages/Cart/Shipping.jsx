// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Button, Stack, TextField } from '@mui/material';
import CheckoutSteps from './CheckoutSteps';

const Shipping = () => {
  //   const dispatch = useDispatch();
  //   const { shippingInfo } = useSelector((state) => state.cart);

  //   const [address, setAddress] = useState(shippingInfo?.address ?? '');
  //   const [city, setCity] = useState(shippingInfo?.city ?? '');
  //   const [state, setState] = useState(shippingInfo?.state ?? '');
  //   const [country, setCountry] = useState(shippingInfo?.country ?? '');
  //   const [pinCode, setPinCode] = useState(shippingInfo?.pinCode ?? '');
  //   const [phoneNo, setPhoneNo] = useState(shippingInfo?.phoneNo ?? '');

  //   const Shipping = (e) => {
  //     e.preventDefault();

  //     // if (phoneNo.length < 10 || phoneNo.length > 10) {
  //     //   alert.error("Phone Number should be 10 digits Long");
  //     //   return;
  //     // }
  //     // dispatch(
  //     //   saveShippingInfo({ address, city, state, country, pinCode, phoneNo })
  //     // );
  //     //history.push("/order/confirm");
  //   };

  return (
    <section className="flash">
      <div className="container">
        <Stack>
          <CheckoutSteps activeStep={0} />

          <Stack px={20} py={5}>
            <Stack spacing={2}>
              <Stack direction="row" sx={{ gap: '3rem' }}>
                <TextField
                  margin="dense"
                  name="address"
                  label="address"
                  fullWidth
                  variant="standard"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
                />
                <TextField
                  margin="dense"
                  name="city"
                  label="city"
                  fullWidth
                  variant="standard"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
                />
              </Stack>
              <Stack direction="row" sx={{ gap: '3rem' }}>
                <TextField
                  margin="dense"
                  name="state"
                  label="state"
                  fullWidth
                  variant="standard"
                  type="number"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
                />
                <TextField
                  margin="dense"
                  name="country"
                  label="country"
                  fullWidth
                  variant="standard"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
                />
              </Stack>

              <Stack direction="row" sx={{ gap: '3rem' }}>
                <TextField
                  margin="dense"
                  name="country"
                  label="country"
                  fullWidth
                  variant="standard"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
                />
                <TextField
                  margin="dense"
                  name="pinCode"
                  label="pinCode"
                  fullWidth
                  variant="standard"
                  type="number"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
                />
              </Stack>

              <Stack direction="row" sx={{ gap: '3rem' }}>
                <TextField
                  margin="dense"
                  name="phoneNo"
                  label="phoneNo"
                  fullWidth
                  variant="standard"
                  type="number"
                  // defaultValue={formData?.name ?? ''}
                  // disabled={disable}
                  // onChange={handleChange}
                  // error={errors?.name !== undefined}
                  // helperText={errors?.name}
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
                <Button variant="contained" color="success">
                  Confirm Shipping Info
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </div>
    </section>
  );
};

export default Shipping;
