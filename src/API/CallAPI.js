import axios from 'axios';

let AUTH_TOKEN = localStorage.getItem('token');

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.headers.common['Authorization'] = `Bearer ${AUTH_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export const getApi = async (url) => {
  const res = await axios.get(url);
  return res.data;
};

export const postApi = async (url, data) => {
  const res = await axios.post(url, data);
  return res.data;
};

export const putApi = async (url, data) => {
  const res = await axios.put(url, data);
  return res.data;
};

export const deleteApi = async (url) => {
  const res = await axios.delete(url);
  return res.data;
};
