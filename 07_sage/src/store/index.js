import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootSaga from './saga';

let sagaMiddleware = createSagaMiddleware();

let store = createStore(reducers, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

// 方便调试，上线删掉
window.store = store;

export default store;