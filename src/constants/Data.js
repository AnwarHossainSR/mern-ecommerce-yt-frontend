import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ViewListIcon from '@mui/icons-material/ViewList';

import assets from '../assets';

export const menuItems = [
  {
    name : 'Home',
    icon : HomeIcon,
    path : '/',
  },
  {
    name : 'Dashboard',
    icon : DashboardIcon,
    path : '/admin/dashboard',
  },
  {
    name : 'Products',
    icon : CategoryIcon,
    path : '/admin/products',
  },
  {
    name : 'Orders',
    icon : ViewListIcon,
    path : '/admin/orders',
  },
  {
    name : 'Settings',
    icon : SettingsIcon,
    path : '/admin/settings',
  },
];

const Data = {
  productItems : [
    {
      id : 1,
      discount : 0,
      cover : assets.images.flash.flash1,
      name : 'Shoes',
      price : 100,
      rating : 4,
    },
    {
      id : 2,
      discount : 50,
      cover : assets.images.flash.flash2,
      name : 'Watch',
      price : 20,
      rating : 5,
    },
    {
      id : 3,
      discount : 0,
      cover : assets.images.flash.flash3,
      name : 'Smart Mobile Black',
      price : 200,
      rating : 3.5,
    },
    {
      id : 4,
      discount : 0,
      cover : assets.images.flash.flash4,
      name : 'Smart Watch Black',
      price : 25,
      rating : 4.5,
    },
    {
      id : 5,
      discount : 13,
      cover : assets.images.flash.flash5,
      name : 'Shoes',
      price : 100,
      rating : 4,
    },
    {
      id : 6,
      discount : 0,
      cover : assets.images.flash.flash1,
      name : 'Shoes',
      price : 100,
      rating : 4,
    },
  ],
  allProducts : [
    {
      id : 1,
      discount : 0,
      cover : assets.images.flash.flash1,
      name : 'Shoes',
      price : 100,
      rating : 4,
    },
    {
      id : 2,
      discount : 50,
      cover : assets.images.flash.flash2,
      name : 'Watch',
      price : 20,
      rating : 5,
    },
    {
      id : 3,
      discount : 0,
      cover : assets.images.flash.flash3,
      name : 'Smart Mobile Black',
      price : 200,
      rating : 3.5,
    },
    {
      id : 4,
      discount : 0,
      cover : assets.images.flash.flash4,
      name : 'Smart Watch Black',
      price : 25,
      rating : 4.5,
    },
    {
      id : 5,
      discount : 13,
      cover : assets.images.flash.flash5,
      name : 'Shoes',
      price : 100,
      rating : 4,
    },
    {
      id : 6,
      discount : 0,
      cover : assets.images.flash.flash1,
      name : 'Shoes',
      price : 100,
      rating : 4,
    },
    {
      id : 7,
      discount : 0,
      cover : assets.images.shops.shop1,
      name : 'Headphone',
      price : 100,
      rating : 4,
    },
    {
      id : 8,
      discount : 0,
      cover : assets.images.shops.shop2,
      name : 'Mobile',
      rating : 4,
    },
    {
      id : 9,
      discount : 4,
      cover : assets.images.shops.shop3,
      name : 'Mobile',
      rating : 5,
    },
    {
      id : 10,
      discount : 10,
      cover : assets.images.shops.shop4,
      name : 'Mobile',
      rating : 2.5,
    },
    {
      id : 11,
      discount : 0,
      cover : assets.images.shops.shop5,
      name : 'Headphone',
      rating : 4,
    },
    {
      id : 12,
      discount : 0,
      cover : assets.images.shops.shop6,
      name : 'Headphone',
      rating : 2,
    },
    {
      id : 13,
      discount : 0,
      cover : assets.images.shops.shop7,
      name : 'Phone',
      rating : 4,
    },
    {
      id : 14,
      discount : 0,
      cover : assets.images.shops.shop8,
      name : 'Headphone',
      rating : 5,
    },
    {
      id : 15,
      discount : 0,
      cover : assets.images.shops.shop9,
      name : 'Headphone',
      rating : 1.5,
    },
    {
      id : 16,
      discount : 0,
      cover : assets.images.shops.shop10,
      name : 'Hat',
      rating : 3.7,
    },
  ],
};
export default Data;
