import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = "https://gorest.co.in/public/v1/";

axiosInstance.interceptors.request.use(request => {
    const token = localStorage.getItem("token");
    if(token) {
        request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
});

axiosInstance.interceptors.response.use(response => {
    return response;
})

export default axiosInstance;