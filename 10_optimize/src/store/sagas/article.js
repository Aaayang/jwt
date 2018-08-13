function* addArticle(action) {
    let { payload } = action;
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