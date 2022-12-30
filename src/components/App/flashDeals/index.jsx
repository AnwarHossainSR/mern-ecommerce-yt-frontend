import Data from '../../../constants/Data';
import FlashCard from './FlashCard';

const FlashDeals = () => {
  return (
    <section className="flash">
      <div className="container">
        <div className="heading f_flex">
          <i className="fa fa-bolt" />
          <h1> Best Deals</h1>
        </div>
        <div className="d_flex">
          <FlashCard productItems={Data?.productItems} />
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
