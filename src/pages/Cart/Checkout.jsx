// import { useState } from 'react';
import { useSelector } from 'react-redux';

import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from './CheckoutSteps';
import OrderConfirm from './OrderConfirm';
import Payment from './Payment';
import Shipping from './Shipping';

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { cartProducts } = useSelector((state) => state.carts);
  const navigate = useNavigate();

  useEffect(() => {
    if (cartProducts.length === 0) return navigate('/');
  }, [cartProducts]);

  return (
    <section className="flash">
      <div className="container">
        <Stack>
          <CheckoutSteps activeStep={activeStep} />
          {activeStep === 0 && <Shipping setActiveStep={setActiveStep} />}
          {activeStep === 1 && <OrderConfirm setActiveStep={setActiveStep} />}
          {activeStep === 2 && <Payment setActiveStep={setActiveStep} />}
        </Stack>
      </div>
    </section>
  );
};

export default Checkout;
