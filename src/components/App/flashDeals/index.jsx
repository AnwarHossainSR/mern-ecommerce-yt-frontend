import { CircularProgress, Stack } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { storeProductInCart } from '../../../redux/actions/CartAction';
import FlashCard from './FlashCard';

const FlashDeals = () => {
  const dispatch = useDispatch();
  const { productsInfo, isLoading } = useSelector((state) => state.products);
  const { cartProducts } = useSelector((state) => state.carts);

  const addToCart = (product) => {
    dispatch(storeProductInCart(cartProducts, product));
  };

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1> Best Deals</h1>
        </div>
        <div className="d_flex">
          {isLoading && (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Stack>
          )}
          {productsInfo.length > 0 &&
            productsInfo.map((product) => (
              <FlashCard
                product={product}
                key={product._id}
                addToCart={addToCart}
              />
            ))}
          {!isLoading && productsInfo.length === 0 && (
            <Stack
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1>No Products Found</h1>
            </Stack>
          )}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
