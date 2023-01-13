import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const getQueryUrl = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};

export const getCartDetails = (cartProducts) => {
  const carts = {};
  cartProducts.forEach((product) => {
    if (carts[product._id]) {
      carts[product._id].quantity += 1;
    } else {
      carts[product._id] = { ...product, quantity: 1 };
    }
  });
  return convertObjectToArray(carts);
};

export const convertObjectToArray = (object) => {
  return Object.keys(object).map((key) => object[key]);
};

export const notify = (message, type) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: 'bottom-right',
        className: `foo-bar ${type}`,
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'bottom-right',
        className: `foo-bar ${type}`,
      });
      break;
    default:
      toast(message, {
        position: 'bottom-right',
        className: `foo-bar ${type}`,
      });
  }
};

export const getCartProductPriceInfo = (carts) => {
  const priceInfo = {
    totalPrice: 0,
    totalDiscount: 0,
    grantTotal: 0,
    totalQuantity: 0,
  };

  carts.forEach((cart) => {
    priceInfo.totalPrice += cart.price * cart.quantity;
    if (cart.discount && cart.discount > 0) {
      priceInfo.totalDiscount +=
        (cart.discount / 100) * cart.price * cart.quantity;
    }
    priceInfo.totalQuantity += cart.quantity;
  });

  priceInfo.grantTotal = priceInfo.totalPrice - priceInfo.totalDiscount;

  return priceInfo;
};

// return 'Name', 'Image', 'Category', 'Stock', 'Price' from array of object
export const getFilteredProducts = (products) => {
  const filteredProducts = products.map((product) => {
    let { _id, name, images, category, stock, price } = product;
    return { _id, name, images, category, stock, price };
  });

  return filteredProducts;
};

export const getFilteredData = (data) => {
  const filteredData = data.map((item) => {
    let { _id, name, images, quantity, price } = item;
    return { product: _id, name, image: images[0].url, quantity, price };
  });

  return filteredData;
};
