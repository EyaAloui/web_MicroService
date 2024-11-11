import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api', // Base URL de ton serveur Express
});

export default api;
