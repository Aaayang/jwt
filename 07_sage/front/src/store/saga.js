import { takeEvery, put, call, all } from 'redux-saga/effects';
import * as types from './action-types';
import userApi from '../api/user';
import { decode } from '../utils/jwt';
function* login(action) {
    let { payload } = action;
    try {
        
        let response = yield call(userApi.login, payload);
        
        console.log(response);
        let jwtToken = response.data.jwtToken;
        let user = decode(jwtToken);
        yield put({ type: types.LOGIN_SUCCESS, user });
    } catch (error) {
        yield put({ type: types.LOGIN_FAIL, error });
    }
}

function* loginFlow() {
    //当监听到LOGIN的动作的时候，会交给login函数来处理
    yield takeEvery(types.LOGIN, login);// {payload:{username,password}}
}

export default function* rootSaga() {
    yield all([loginFlow()]);
}