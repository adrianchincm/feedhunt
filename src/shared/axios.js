import axios from 'axios'
import {getAuthToken} from './api'

const instance = axios.create({
    baseURL: 'https://feedhunt.herokuapp.com'
});

instance.interceptors.request.use(function (config) {
    const token = getAuthToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default instance;