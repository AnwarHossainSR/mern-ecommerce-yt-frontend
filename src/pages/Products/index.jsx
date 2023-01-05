import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FlashCard from '../../components/App/flashDeals/FlashCard';
import { getAllProducts } from '../../redux/actions/ProductAction';

const Products = () => {
  const {productsInfo,isLoading} = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if(productsInfo.length === 0) {
      dispatch(getAllProducts())
    }
  }, [productsInfo])

  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa-brands fa-slack" />
          <h1> All Products</h1>
        </div>
        <div className="d_flex">
        {
          isLoading && <h1>Loading...</h1>
        }
        {
          productsInfo.length >0 && productsInfo.map(product => (
            <FlashCard product={product} key={product._id} />
          ))
        }
        </div>
      </div>
    </section>
  );
};

export default Products;
