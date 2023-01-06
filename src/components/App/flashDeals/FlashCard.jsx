import Rating from '@mui/material/Rating';

const FlashCard = ({ product, addToCart }) => {
  return (
    <div className="product_container ">
      <div className="product mtop">
        <div className="img">
          {product?.discount > 0 && (
            <span className="discount">{product.discount}% Off</span>
          )}
          <img src={product?.images && product?.images[0].url} alt="" />
        </div>
        <div className="product-details">
          <h3>{product?.name}</h3>
          <Rating
            name="half-rating"
            defaultValue={product?.ratings}
            precision={0.5}
          />
          <div className="price">
            <h4>${product?.price}.00 </h4>
            <button onClick={() => addToCart(product?.id)}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
