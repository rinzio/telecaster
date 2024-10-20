import axios from 'axios';

export const HTTP = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});
