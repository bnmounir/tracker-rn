import axios from 'axios';
import { AsyncStorage } from 'react-native';

const instance = axios.create({
    baseURL: 'https://e9ecaa71.ngrok.io',
});

instance.interceptors.request.use(
    async (config) => {
        const tk = await AsyncStorage.getItem('token');
        if (tk) {
            config.headers.Authorization = `Bearer ${tk}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;
