import axios from 'axios';

axios.defaults.withCredentials = true;

const USERS_API_END_POINT = 'http://localhost:5000/api/users'

export const USERS_API = axios.create({
    baseURL: USERS_API_END_POINT,
    timeout: 2000,
});
