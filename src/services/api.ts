import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gabejabes-proffy-server.herokuapp.com/'
});

export default api;