function* loadUser() {
    let jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
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