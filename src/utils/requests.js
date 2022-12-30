import axios from 'axios';
const token = localStorage.getItem('token');

axios.defaults.baseURL = 'http://localhost:4000/api/v1';
axios.defaults.headers.common = { Authorization: `Bearer ${token}` };
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';

export const GetRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    return error;
  }
};

export const PostRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const PutRequest = async (url, data) => {
  try {
    const response = await axios.put(url, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const DeleteRequest = async (url) => {
  try {
    const response = await axios.delete(url);
    return response;
  } catch (error) {
    return error;
  }
};
