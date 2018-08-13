import axios from 'axios';
const BASE_URL = 'http://localhost:8080';
export function post(url, body) {
    return axios.post(BASE_URL + url, body);
}