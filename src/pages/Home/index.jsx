import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import FlashDeals from '../../components/App/flashDeals';
import Hero from '../../components/App/Hero';
import { getAllProducts } from '../../redux/actions/ProductAction';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <Hero />
      <FlashDeals />
    </>
  );
};

export default Home;
