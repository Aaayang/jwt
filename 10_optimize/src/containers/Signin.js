import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../store/actions/user';
class Signin extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        let username = this.username.value;
        let password = this.password.value;
        let user = { username, password };
        this.props.login(user);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="username">用户名</label>
                    <input className="form-control" ref={input => this.username = input} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input className="form-control" ref={input => this.password = input} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" type="submit" />
                </div>
            </form>
        )
    }
}
export default connect(
    state => state.user,
    actions
)(Signin);