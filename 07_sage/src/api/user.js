import { post } from './index';
import axios from 'axios';
function login(body) {
    /* axios.post('http://localhost:8080/users/signin', {username: "aaa", password: "aaa"}).then(function (response) {
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    }); */
    return post('/users/signin', body).then(response => {
        
        return response.data
    });
}
export default {
    login
}