import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import store from './store';

import App from './containers/App';
// 就是通过 Redux 跳路径用的
import {
    ConnectedRouter
} from 'react-router-redux';

import history from './history';

// ConnectedRouter 用来替代 HashRouter
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#root')
);