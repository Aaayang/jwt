import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as types from './action-types';
import userApi from '../api/user';
import articleApi from '../api/article';
import { decode } from '../utils/jwt';
import {push} from 'react-router-redux';
function* login(action) {
    let { payload } = action;
    try {
        
        let response = yield call(userApi.login, payload);
        
        console.log(response);
        let jwtToken = response.data.jwtToken;
        // 把得到的 token 保存在本地
        localStorage.setItem('jwtToken', jwtToken);
        let user = decode(jwtToken);
        yield put({ type: types.LOGIN_SUCCESS, user });
        // 跳转路径
        yield put(push('/'));
    } catch (error) {
        yield put({ type: types.LOGIN_FAIL, error });
    }
}

function* logout() {
    // 服务器没有记录
    localStorage.removeItem('jwtToken');
    yield put({type: types.LOGOUT_SUCCESS});
    yield put(push('/users/signin'));
}

function* loginFlow() {
    //当监听到LOGIN的动作的时候，会交给login函数来处理
    yield takeEvery(types.LOGIN, login);// {payload:{username,password}}
    yield takeEvery(types.LOGOUT, logout);
}


function* loadUser() {
    let jwtToken = localStorage.getItem('jwtToken');
    if(jwtToken) {
        let user = decode(jwtToken);
        // 发给仓库
        yield put({ type: types.LOGIN_SUCCESS, user });
        // 跳转路径
        yield put(push('/'));
    }
}

function* watchLoadUser() {
    // 监听动作
    yield takeEvery(types.LOAD_USER, loadUser)
}



function* addArticle(action) {
    let {payload} = action;
    try {
        let response = yield call(articleApi.addArticle, payload);
        yield put({ type: types.ADD_ARTICLE_SUCCESS });
        yield put(push('/'));
    } catch (error) {
        yield put({ type: types.ADD_ARTICLE_FAIL, error });
    }
}

function* watchAddArticle() {
    yield takeEvery(types.ADD_ARTICLE, addArticle);
}

export default function* rootSaga() {
    yield all([loginFlow(), watchLoadUser(), watchAddArticle()]);
}