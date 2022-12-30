import axios from './configAxios';

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
