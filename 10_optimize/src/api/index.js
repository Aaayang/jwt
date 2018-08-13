import axios from 'axios';
import history from '../history';

// 拦截器
// 在向后台发出请求的时候，可以动态的修改配置
// 拦截请求
axios.interceptors.request.use(config => {
    let jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken) {
        config.headers.authorization = jwtToken;
    }
    return config;
});

// 拦截响应
axios.interceptors.response.use(res => {
    if (res.data.code != 0) {
        // 失败
        return Promise.reject(res.data.error);
    }
    return res;
}, error => {
    // 401 未授权
    // 403 禁止访问
    if (error.response.status >= 400 && error.response.status > 500) {
        history.push('/users/login');
    }
    return Promise.reject(error.response.data.error);
});

const BASE_URL = 'http://localhost:8080';
export function post(url, body) {
    return axios.post(BASE_URL + url, body);
}