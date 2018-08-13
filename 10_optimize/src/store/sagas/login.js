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
    yield put({ type: types.LOGOUT_SUCCESS });
    yield put(push('/users/signin'));
}

function* loginFlow() {
    //当监听到LOGIN的动作的时候，会交给login函数来处理
    yield takeEvery(types.LOGIN, login);// {payload:{username,password}}
    yield takeEvery(types.LOGOUT, logout);
}
