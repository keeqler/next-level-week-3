import axios from 'axios';

export const api = axios.create({ baseURL: 'http://192.168.255.102:3333' });
