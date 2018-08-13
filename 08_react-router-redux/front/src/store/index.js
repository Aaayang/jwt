import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './saga';
import history from '../history';

// 1 注意要在 sagaMiddleware 上面引入
import {routerMiddleware} from 'react-router-redux';

let sagaMiddleware = createSagaMiddleware();

// 2
let router = routerMiddleware(history);

// 3
let store = createStore(reducers, applyMiddleware(sagaMiddleware, router, logger));

sagaMiddleware.run(rootSaga);

// 方便调试，上线删掉
window.store = store;

export default store;