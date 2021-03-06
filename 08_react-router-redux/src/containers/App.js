// 16 新增
import React, { Component, Fragment } from 'react';
import {Link, Route} from 'react-router-dom';

import Home from './Home';
import Signup from './Signup';
import Signin from './Signin';
import Header from '../components/Header';

export default class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
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