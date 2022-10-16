import axios from 'axios';

export const bigData = axios.create({
  baseURL: 'https://api.bigdatacloud.net/data',
});
