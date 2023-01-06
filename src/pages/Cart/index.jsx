import { Avatar, Button, Card, Stack, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCartsAction } from '../../redux/actions/CartAction';
import { getCartDetails } from '../../utils/helper';

const Cart = () => {
  const { cartProducts } = useSelector((state) => state.carts);
  const carts = getCartDetails(cartProducts);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearCarts = () => {
    dispatch(clearCartsAction());
    navigate('/');
  };

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-shopping-bag" />
          <h1>Cart Items</h1>
        </div>
        <div className="d_flex">
          {carts.length === 0 && (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h3>Cart is empty</h3>
            </Stack>
          )}

          {carts.length > 0 && (
            <Stack
              sx={{
                backgroundColor: '#f5f5f5',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
              p={6}
            >
              <Card
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  p: 2,
                  pr: 10,
                  border: 'none',
                  boxShadow: 'none',
                  borderBottom: '1px solid #ccc',
                }}
              >
                <Typography variant="h6" component="div">
                  #Serial
                </Typography>

                <Typography variant="h6" component="div">
                  Image
                </Typography>
                <Typography variant="h6" component="div">
                  Name
                </Typography>
                <Typography variant="h6" component="div">
                  Quantity
                </Typography>
                <Typography variant="h6" component="div">
                  Action
                </Typography>
              </Card>
              {carts.map((cart, index) => (
                <Card
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 2,
                    pr: 5,
                    border: 'none',
                    boxShadow: 'none',
                  }}
                  key={index}
                >
                  <Typography variant="h6" component="div">
                    #{index + 1}
                  </Typography>

                  <Avatar
                    alt="product_image"
                    src={cart.images[0].url}
                    sx={{ width: 60, height: 60 }}
                  />
                  <Typography variant="h6" component="div">
                    {cart.name}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {cart.quantity}
                  </Typography>
                  <Button variant="contained" color="error">
                    Remove
                  </Button>
                </Card>
              ))}

              <Stack
                sx={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  mt: 5,
                }}
              >
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onClick={clearCarts}
                >
                  Checkout
                </Button>
              </Stack>
            </Stack>
          )}
        </div>
      </div>
    </section>
  );
};

export default Cart;
