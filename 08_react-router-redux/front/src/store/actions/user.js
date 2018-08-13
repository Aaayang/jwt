import * as types from '../action-types';

// action
export default {
    login(payload) {
        return {
            type: types.LOGIN,
            payload // 被 saga 拦截到了
        };
    },
    loadUser() {
        return {
            type: types.LOAD_USER
        };
    },
    logout() {
        return {
            type: types.LOGOUT
        };
    }
}