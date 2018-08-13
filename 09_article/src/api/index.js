import axios from 'axios';

// 拦截器
// 在向后台发出请求的时候，可以动态的修改配置
axios.interceptors.request.use(config => {
    let jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken) {
        config.headers.authorization = jwtToken;
    }
    return config;
});



const BASE_URL = 'http://localhost:8080';
export function post(url, body) {
    return axios.post(BASE_URL + url, body);
}