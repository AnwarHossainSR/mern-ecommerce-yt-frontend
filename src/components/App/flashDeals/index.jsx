import { useSelector } from 'react-redux';
import FlashCard from './FlashCard';

const FlashDeals = () => {
  const { productsInfo } = useSelector((state) => state.products);
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1> Best Deals</h1>
        </div>
        <div className="d_flex">
          {productsInfo.length > 0 &&
            productsInfo.map((product) => (
              <FlashCard product={product} key={product._id} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
