// import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Button, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { notify } from '../../utils/helper';
import CheckoutSteps from './CheckoutSteps';
import Payment from './Payment';
import PlaceOrder from './PlaceOrder';
import Shipping from './Shipping';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { shippingInfo, cartProducts } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (activeStep === 0) return;
    setActiveStep((prev) => prev - 1);
  };

  useEffect(() => {
    if (cartProducts.length === 0) return navigate('/');
  }, [cartProducts]);

  const handleSubmit = () => {
    if (activeStep === 0) {
      if (!shippingInfo?.address) return notify('Address is required', 'error');
      if (!shippingInfo?.city) return notify('City is required', 'error');
      if (!shippingInfo?.state) return notify('State is required', 'error');
      if (!shippingInfo?.country) return notify('Country is required', 'error');
      if (!shippingInfo?.pinCode)
        return notify('Pin Code is required', 'error');
      if (!shippingInfo?.phoneNo)
        return notify('Phone Number is required', 'error');

      if (
        shippingInfo?.phoneNo?.length < 11 ||
        shippingInfo?.phoneNo?.length > 11
      )
        return notify('Phone Number should be 11 digits', 'error');

      setActiveStep((prev) => prev + 1);
    }

    if (activeStep === 1) {
      //call api to place order
      setActiveStep((prev) => prev + 1);
    }

    if (activeStep === 2) {
      //payment functionality
    }
  };

  return (
    <section className="flash">
      <div className="container">
        <Stack px={20} py={5}>
          <CheckoutSteps activeStep={activeStep} />
          <Stack py={5}>
            {activeStep === 0 && (
              <Shipping setActiveStep={setActiveStep} activeStep={activeStep} />
            )}
            {activeStep === 1 && <PlaceOrder setActiveStep={setActiveStep} />}
            {activeStep === 2 && <Payment setActiveStep={setActiveStep} />}
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
            <Button
              variant="contained"
              color="secondary"
              onClick={handleNavigate}
            >
              Back
            </Button>
            <Button variant="contained" color="success" onClick={handleSubmit}>
              {activeStep === 0 && 'Continue'}
              {activeStep === 1 && 'Place Order'}
              {activeStep === 2 && 'Pay Now'}
            </Button>
          </Stack>
        </Stack>
      </div>
    </section>
  );
};

export default Checkout;
