import axios from 'axios';

let AUTH_TOKEN = localStorage.getItem('token');
axios.defaults.baseURL = 'http://localhost:4000/api/v1';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default axios;
