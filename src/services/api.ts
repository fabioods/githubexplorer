import axios from 'axios';

const server = axios.create({
  baseURL: 'https://api.github.com/repos/',
});

export default server;
