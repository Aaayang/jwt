// 16 新增
import React, { Component, Fragment } from 'react';
import {Link, Route} from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand">用户管理</a>
                        </div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">首页</Link>
                            </li>
                            <li><Link to="/users/signup">注册</Link></li>
                            <li><Link to="/users/signin">登录</Link></li>
                            <li><Link to="/users/signout">退出</Link></li>
                            <li><Link to="/articles/add">发表文章</Link></li>
                        </ul>
                    </div>
                </nav>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/users/signup" component={Signup}/>
                            <Route exact path="/users/signin" component={Signin}/>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}