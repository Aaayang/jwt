// * 不用一直结构了
// 就两个可以直接解构
import * as types from "../action-types";
//user这个子状态会存登录的用户和当前的错误信息
let initState = {error: null };
export default function (state = initState, action) {
    switch (action.type) {
        case types.ADD_ARTICLE_FAIL:
            return { ...state, error: action.error };
        case types.ADD_ARTICLE_SUCCESS:
            return { ...state, error: null };
        default:
            return state;
    }
}