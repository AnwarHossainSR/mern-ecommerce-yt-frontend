import axios from 'axios';
import { useEffect } from 'react';

const index = () => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`;
    }
  }, []);
  return <div>Normal User Dashboard</div>;
};

export default index;
