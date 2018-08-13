import * as types from '../action-types';

// action
export default {
    addArticle(payload) {
        return {
            type: types.ADD_ARTICLE,
            payload // 被 saga 拦截到了
        };
    },
}