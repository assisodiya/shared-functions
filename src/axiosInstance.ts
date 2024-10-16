import axios from 'axios';

const axiosInstance = axios.create({
    timeout: 30000,
    withCredentials: true
});

axiosInstance.interceptors.response.use(
    response => response,
    error => {
        if (typeof window !== 'undefined' && error.response) {
            if (error.response.status === 401 || error.response.status === 403) {
                window.location.href = '/auth/login';
            }
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
