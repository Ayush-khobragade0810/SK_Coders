import axios from 'axios';

const api = axios.create({
    baseURL: "https://6954b3611cd5294d2c7d3e5c.mockapi.io"
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token"); 

    if (token) {
        config.headers.Authorization = `${token}`;
    }

    return config;
},
    (error) => Promise.reject(error)
);

export default api;