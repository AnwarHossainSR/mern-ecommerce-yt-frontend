import { useLocation } from 'react-router-dom';
export const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

export const getQueryUrl = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&');
};
